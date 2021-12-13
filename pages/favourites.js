import { MongoClient } from "mongodb";
import LinkButton from "../components/buttons/linkButton";
import Gallery from "../components/gallery";

export default function Breeds({ favourites }) {
	return (
		<>
			<h1>
				Here are some favourites{" "}
				<span className="material-icons-outlined">favorite</span>
			</h1>
			<Gallery label="A favourite" images={favourites} />
			<LinkButton path="/" variant="outlined">
				Go Home
			</LinkButton>
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

	console.log(data);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://liezelbreytenbach:p!ncUs$!0n@cluster0.cwpmm.mongodb.net/catimages?retryWrites=true&w=majority"
	);
	const db = client.db();
	const favouritesCollection = db.collection("favourites");

	const data = await favouritesCollection.find().toArray();

	console.log(data);

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
