import LinkButton from "../components/buttons/linkButton";
import { ButtonSplit } from "../components/buttons/styles";

export default function Home() {
	return (
		<>
			<h1>An amazing cat image library :)</h1>
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
