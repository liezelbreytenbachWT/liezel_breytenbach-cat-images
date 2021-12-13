import LinkButton from "../components/buttons/linkButton";
import { ButtonList } from "../components/buttons/styles";

export default function Breeds({ breeds }) {
	return (
		<>
			<h1>
				Select a <span className="cPrimary">breed</span> below to have a
				closer look :)
			</h1>
			{breeds.length > 0 ? (
				<ButtonList>
					{breeds.map((breed) => (
						<li key={breed.id}>
							<LinkButton
								path={`/cat-search/${breed.id}`}
								variant="list"
							>
								{breed.name}
							</LinkButton>
						</li>
					))}
				</ButtonList>
			) : (
				<p>No available breeds :(</p>
			)}
			<LinkButton path="/" variant="outlined">
				Go Home
			</LinkButton>
		</>
	);
}

export async function getStaticProps() {
	const response = await fetch("https://api.thecatapi.com/v1/breeds");
	const data = await response.json();

	const mappedData = data.map((breed) => ({
		id: breed.id,
		name: breed.name,
	}));

	return {
		props: {
			breeds: mappedData,
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
