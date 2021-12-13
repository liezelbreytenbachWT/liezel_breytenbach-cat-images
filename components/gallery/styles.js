import styled from "styled-components";
import { ifProp } from "styled-tools";
import { StyledIconButton } from "../buttons/styles";

const gutter = "4px";

export const StyledGallery = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin: 30px 0;
`;

export const StyledGalleryItem = styled.div`
	width: ${`calc((100% - ${gutter}) / 2)`};
	margin-bottom: ${gutter};
	position: relative;
	&:nth-of-type(odd) {
		margin-right: ${gutter};
	}
	div {
		width: 100%;
		padding-bottom: 100%;
		background-image: ${({ $src }) => `url(${$src})`};
		background-size: cover;
		background-repeat: no-repeat;
	}
	${StyledIconButton} {
		position: absolute;
		bottom: 5%;
		right: 5%;
		color: ${({ theme }) => theme.colour.white};
		text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
		&:hover {
			background-color: ${({ theme }) => theme.colour.whiteOp};
			color: ${({ theme, $color }) => theme.colour[$color].main};
			text-shadow: none;
		}
	}
`;
