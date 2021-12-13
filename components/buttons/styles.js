import styled, { css } from "styled-components";
import { switchProp, ifProp, ifNotProp } from "styled-tools";
import { gradient } from "../../styles/globals";

const big = "44px";
const small = "40px";

const bubble = css`
	height: ${big};
	border-radius: ${`calc(${big} / 2)`};
	display: flex;
	align-items: center;
	span {
		font-size: 1.7rem;
		display: block;
	}
`;

const gradientOverlay = css`
	position: relative;
	z-index: 1;
	&:before {
		background-color: ${({ theme }) => theme.colour.white};
		border-radius: inherit;
		display: block;
		position: absolute;
		z-index: -1;
		content: "";
	}
`;

export const StyledButton = styled.div`
	a {
		color: ${({ theme, $color }) =>
			switchProp(
				"$variant",
				{
					outlined: theme.colour[$color].main,
					list: theme.colour.text.dark,
				},
				theme.colour.white
			)};
		background-color: ${({ theme, $color }) =>
			switchProp(
				"$variant",
				{
					outlined: theme.colour.white,
					list: theme.colour.background.light,
				},
				theme.colour[$color].main
			)};
		border: ${({ theme, $color }) =>
			ifProp(
				{ $variant: "outlined" },
				`1px solid ${theme.colour[$color].main}`
			)};
		padding: 0 20px;
		height: ${ifProp({ $variant: "list" }, small, big)};
		border-radius: ${ifProp(
			{ $variant: "list" },
			`calc(${small} / 2)`,
			`calc(${big} / 2)`
		)};
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		font-size: ${ifProp({ $variant: "list" }, "0.8rem", "1rem")};
		font-weight: bold;
		letter-spacing: 0.07rem;
		:hover {
			color: ${({ theme }) =>
				ifNotProp({ $variant: "main" }, theme.colour.white)};
			background-color: ${({ theme, $color }) =>
				ifProp(
					{ $variant: "main" },
					theme.colour[$color].dark,
					theme.colour[$color].main
				)};
		}
	}
`;

export const StyledIconButton = styled.button`
	${bubble}
	width: ${big};
	justify-content: center;
`;

export const StyledBubbleLabel = styled.div`
	color: ${({ theme }) => theme.colour.black};
	font-weight: bold;
	max-width: 0;
	opacity: 0;
	padding-right: 0;
	transition: all 0.3s, opacity 0.1s;
`;

export const StyledBubbleContent = styled.div`
	${bubble}
	${gradient}
  ${gradientOverlay}
	overflow: hidden;
	justify-content: flex-start;
	color: ${({ theme }) => theme.colour.primary.main};
	&:before {
		top: 1px;
		bottom: 1px;
		left: 1px;
		right: 1px;
	}
	[class*="material-icons"] {
		width: ${big};
		text-align: center;
	}
`;

export const StyledBubble = styled.div`
	position: relative;
	a {
		font-size: 0;
		z-index: 2;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		&:hover ~ ${StyledBubbleContent} ${StyledBubbleLabel} {
			max-width: 200px;
			opacity: 1;
			padding-right: 14px;
			transition: all 0.3s, opacity 0.1s 0.3s;
		}
	}
`;

export const ButtonList = styled.ul`
	padding: 0;
	margin: 0 0 30px;
	display: flex;
	flex-wrap: wrap;
	li {
		list-style: none;
		margin: 5px 0;
		&:nth-last-of-type(n + 2) {
			margin-right: 10px;
		}
	}
`;

export const ButtonSplit = styled.div`
	${gradient};
	border-radius: ${`calc(${big} / 2)`};
	display: flex;
	align-items: stretch;
	padding: 1px;
	overflow: hidden;
	${StyledButton} {
		flex-grow: 1;
		width: 0;
		a {
			border: none;
			background-color: transparent;
			position: relative;
			z-index: 1;
			${gradientOverlay}
			&:before {
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
			}
			&:hover:before {
				top: -1px;
				bottom: -1px;
			}
		}
		&:first-of-type a {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			&:before {
				right: 1px;
			}
			&:hover:before {
				background-color: ${({ theme }) => theme.colour.primary.main};
				right: 0;
			}
		}
		&:last-of-type a {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			&:hover:before {
				background-color: ${({ theme }) => theme.colour.secondary.main};
				left: -1px;
			}
		}
	}
`;
