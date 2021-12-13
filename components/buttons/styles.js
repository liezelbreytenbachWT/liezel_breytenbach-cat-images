import styled from "styled-components";
import { switchProp, ifProp, ifNotProp } from "styled-tools";
import { gradient } from "../../styles/globals";

const big = "44px";
const small = "40px";

export const StyledButton = styled.div`
	a {
		color: ${({ theme, $color }) =>
			switchProp(
				"$variant",
				{
					outlined: theme.colour[$color].main,
					list: theme.colour.text.light,
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
	width: ${big};
	height: ${big};
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		font-size: 1.7rem;
		display: block;
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
			&:before {
				background-color: ${({ theme }) => theme.colour.white};
				border-radius: inherit;
				display: block;
				position: absolute;
				z-index: -1;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				content: "";
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
