import styled from "styled-components";
import Illustration, { StyledImageWrapper } from "../illustration";

const StyledLoader = styled.div`
	position: fixed;
	z-index: 11;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colour.whiteOp};
`;

const StyledLoaderIcon = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 100%;
	animation: spin 1.4s linear infinite;
	${StyledImageWrapper} {
		padding-bottom: 100%;
		margin: 0;
	}
`;

export default function Loader() {
	return (
		<StyledLoader>
			<StyledLoaderIcon>
				<Illustration image="loader.png" />
			</StyledLoaderIcon>
		</StyledLoader>
	);
}
