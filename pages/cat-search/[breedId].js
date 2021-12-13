// import { useRouter } from "next/router";
import LinkButton from "../../components/buttons/linkButton";
import Gallery from "../../components/gallery";

export default function SearchBreed({ breed: { name, description, images } }) {
	// const router = useRouter();
	// const breedId = router.query.breedId;

	return (
		<>
			<h1>{name || <em>Unknown Breed Name</em>}</h1>
			<h2 className="cPrimary">Breed Cat Search</h2>
			<p>{description || <em>No description found.</em>}</p>
			<Gallery label={`${name} breed`} images={images} />
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
	console.log(imagesData.breeds);

	return {
		props: {
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
