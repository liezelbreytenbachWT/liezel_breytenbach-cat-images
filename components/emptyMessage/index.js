import PropTypes from "prop-types";
import styled from "styled-components";
import Illustration from "../illustration";

const StyledEmptyMessage = styled.div`
	background-color: ${({ theme }) => theme.colour.background.light};
	color: ${({ theme }) => theme.colour.text.dark};
	border-radius: 22px;
	padding: ${({ theme }) => theme.spacing.large};
	margin: ${({ theme }) => theme.spacing.large} 0;
	text-align: center;
`;

export default function EmptyMessage({ image, title, message }) {
	return (
		<StyledEmptyMessage>
			<Illustration image={image} />
			<h2>{title}</h2>
			<p>{message}</p>
		</StyledEmptyMessage>
	);
}

EmptyMessage.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	message: PropTypes.string,
};

EmptyMessage.defaultProps = {
	title: "Empty results",
	image: "cat-napping.png",
};
