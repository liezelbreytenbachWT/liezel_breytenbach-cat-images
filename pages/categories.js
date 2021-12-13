import LinkButton from "../components/buttons/linkButton";
import { ButtonList } from "../components/buttons/styles";

const dummy = [
	{ id: "one", name: "One" },
	{ id: "two", name: "Two" },
];

export default function Categories({ categories }) {
	return (
		<>
			<h1>
				Select a <span className="cSecondary">category</span> below to
				have a closer look :)
			</h1>
			<ButtonList>
				{categories.map((category) => (
					<li key={category.id}>
						<LinkButton
							path={`/cat-search/${category.id}`}
							variant="list"
							color="secondary"
						>
							{category.name}
						</LinkButton>
					</li>
				))}
			</ButtonList>
			<LinkButton path="/" variant="outlined" color="secondary">
				Go Home
			</LinkButton>
		</>
	);
}

export async function getStaticProps() {
	const response = await fetch("https://api.thecatapi.com/v1/categories");
	const data = await response.json();

	const mappedData = data.map((category) => ({
		id: category.id,
		name: category.name,
	}));

	return {
		props: {
			categories: mappedData,
		},
		revalidate: 3600,
	};
}
