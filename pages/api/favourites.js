import { MongoClient } from "mongodb";

async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		const client = await MongoClient.connect(
			"mongodb+srv://liezelbreytenbach:p!ncUs$!0n@cluster0.cwpmm.mongodb.net/catimages?retryWrites=true&w=majority"
		);
		const db = client.db();

		const favouritesCollection = db.collection("favourites");

		const result = await favouritesCollection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: "Favourite added!" });
	}
	if (req.method === "DELETE") {
		const data = req.body;

		const client = await MongoClient.connect(
			"mongodb+srv://liezelbreytenbach:p!ncUs$!0n@cluster0.cwpmm.mongodb.net/catimages?retryWrites=true&w=majority"
		);
		const db = client.db();

		const favouritesCollection = db.collection("favourites");

		const result = await favouritesCollection.deleteOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: "Favourite removed!" });
	}
}

export default handler;
