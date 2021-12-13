import { MongoClient } from "mongodb";
import LinkButton from "../../components/buttons/linkButton";
import Gallery from "../../components/gallery";
import { addFavourite, removeFavourite } from "../favourites";

export default function SearchBreed({
	favourites,
	breed: { id: breedId, name, description, images },
}) {
	const favouriteIds = favourites.map((fav) => fav.id);

	console.log(favouriteIds);

	const handleFavourite = (imageId) => {
		const isFavourite =
			favouriteIds.filter((favId) => favId === imageId).length > 0;
		if (isFavourite) {
			removeFavourite(imageId);
		} else {
			const favouriteImg = images.filter((image) => image.id === imageId);
			addFavourite({
				id: imageId,
				url: favouriteImg[0].url,
				type: "breed",
				value: breedId,
			});
		}
	};

	return (
		<>
			<h1>{name || <em>Unknown Breed Name</em>}</h1>
			<h2 className="cPrimary">Breed Cat Search</h2>
			<p>{description || <em>No description found.</em>}</p>
			<Gallery
				label={`${name} breed`}
				images={images}
				favourites={favouriteIds}
				onFavourite={(id) => handleFavourite(id)}
			/>
			<LinkButton path="/breeds" variant="outlined">
				All Breeds
			</LinkButton>
		</>
	);
}

export async function getStaticPaths() {
	const response = await fetch("https://api.thecatapi.com/v1/breeds");
	const data = await response.json();

	const mappedData = data.map((breed) => ({
		id: breed.id,
	}));

	return {
		fallback: false,
		paths: mappedData.map((data) => ({
			params: {
				breedId: data.id,
			},
		})),
	};
}

export async function getStaticProps(context) {
	const breedId = context.params.breedId;

	const breed = await fetch(
		`https://api.thecatapi.com/v1/breeds/search?q=${breedId}`
	);
	const breedData = await breed.json();

	const images = await fetch(
		`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=10`
	);
	const imagesData = await images.json();

	const client = await MongoClient.connect(
		"mongodb+srv://liezelbreytenbach:p!ncUs$!0n@cluster0.cwpmm.mongodb.net/catimages?retryWrites=true&w=majority"
	);
	const db = client.db();
	const favouritesCollection = db.collection("favourites");

	const favouritesData = await favouritesCollection
		.find({ type: "breed", value: breedId })
		.toArray();

	client.close();

	return {
		props: {
			favourites: favouritesData.map((fav) => ({
				id: fav.id,
			})),
			breed: {
				id: breedId,
				name: breedData[0]?.name || "",
				description: breedData[0]?.description || "",
				images: imagesData.map((image) => ({
					id: image.id,
					url: image.url,
				})),
			},
		},
		revalidate: 3600,
	};
}
