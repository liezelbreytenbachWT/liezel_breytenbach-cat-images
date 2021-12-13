import styled from "styled-components";
import LinkButton from "../components/buttons/linkButton";
import Illustration from "../components/illustration";
import { ButtonSplit } from "../components/buttons/styles";

const StyledHome = styled.main`
	height: ${({ theme }) => `calc(100vh - ${theme.spacing.large} * 2)`};
	padding-bottom: ${({ theme }) => theme.spacing.large};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	p {
		font-size: 1.2rem;
		margin: -10px 0 ${({ theme }) => theme.spacing.large};
	}
`;

export default function Home() {
	return (
		<StyledHome>
			<h1>An amazing cat image library :)</h1>
			<p>Select breeds or categories and start the fun!</p>
			<Illustration image="cat-playing.png" size="large" />
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
		</StyledHome>
	);
}
