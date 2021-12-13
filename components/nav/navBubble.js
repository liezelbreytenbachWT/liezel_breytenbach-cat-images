import styled from "styled-components";
import BubbleButton from "../buttons/bubbleButton";

const StyledNavBubble = styled.div`
	position: fixed;
	right: 5vw;
	bottom: 5vw;
	z-index: 10;
	transform: scale(0);
	animation: pop 0.3s 0.3s forwards;
	[class*="material-icons"] {
		padding-top: 2px;
	}
`;

export default function NavBubble() {
	return (
		<StyledNavBubble>
			<BubbleButton
				path="/favourites"
				icon="favorite"
				label="Favourites"
			/>
		</StyledNavBubble>
	);
}
