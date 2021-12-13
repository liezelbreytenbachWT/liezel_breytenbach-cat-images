import Image from "next/image";
import PropTypes from "prop-types";
import styled from "styled-components";
import { switchProp } from "styled-tools";

const StyledImageWrapper = styled.div`
	padding-bottom: ${switchProp("$size", {
		normal: "146px",
		large: "206px",
	})};
	margin-bottom: ${({ theme }) =>
		switchProp("$size", {
			normal: theme.spacing.normal,
			large: theme.spacing.large,
		})};
	width: 100%;
	position: relative;
	img {
		min-width: 0 !important;
		max-width: 100% !important;
		width: auto !important;
	}
`;

export default function Illustration({ image, size }) {
	return (
		<StyledImageWrapper $size={size}>
			<Image src={`/${image}`} layout="fill" />
		</StyledImageWrapper>
	);
}

Illustration.propTypes = {
	image: PropTypes.string,
	size: PropTypes.oneOf(["normal", "large"]),
};

Illustration.defaultProps = {
	size: "normal",
};
