import { MongoClient } from "mongodb";
import LinkButton from "../components/buttons/linkButton";
import { ButtonSplit } from "../components/buttons/styles";
import EmptyMessage from "../components/emptyMessage";
import Gallery from "../components/gallery";

export default function Breeds({ favourites }) {
	const favouriteIds = favourites.map((fav) => fav.id);
	return (
		<>
			<h1>
				Here are some favourites{" "}
				<span className="material-icons-outlined">favorite</span>
			</h1>
			{favouriteIds.length > 0 ? (
				<Gallery
					label="A favourite"
					images={favourites}
					favourites={favouriteIds}
					onFavourite={(id) => removeFavourite(id)}
				/>
			) : (
				<EmptyMessage
					title="No Favourites Yet"
					message="Hit the like button on an image to add it to the favourites."
				/>
			)}
			<ButtonSplit>
				<LinkButton path="/breeds" variant="outlined">
					Breeds
				</LinkButton>
				<LinkButton
					path="/categories"
					variant="outlined"
					color="secondary"
				>
					Categories
				</LinkButton>
			</ButtonSplit>
		</>
	);
}

export async function addFavourite(favourite) {
	const response = await fetch("/api/favourites", {
		method: "POST",
		body: JSON.stringify(favourite),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
}

export async function removeFavourite(favouriteId) {
	const response = await fetch("/api/favourites", {
		method: "DELETE",
		body: JSON.stringify({ id: favouriteId }),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://liezelbreytenbach:p!ncUs$!0n@cluster0.cwpmm.mongodb.net/catimages?retryWrites=true&w=majority"
	);
	const db = client.db();
	const favouritesCollection = db.collection("favourites");

	const data = await favouritesCollection.find().toArray();

	client.close();

	return {
		props: {
			favourites: data.map((fav) => ({
				id: fav.id,
				url: fav.url,
			})),
		},
		revalidate: 3600,
	};
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch data from API
// 	return {
// 		props: {
// 			breeds: dummyBreeds,
// 		},
// 	};
// }
