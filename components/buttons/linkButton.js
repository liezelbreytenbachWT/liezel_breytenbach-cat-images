import Link from "next/link";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

export default function LinkButton({ path, children, color, variant }) {
	return (
		<StyledButton $variant={variant} $color={color}>
			<Link href={path}>{children}</Link>
		</StyledButton>
	);
}

LinkButton.propTypes = {
	path: PropTypes.string,
	children: PropTypes.node,
	color: PropTypes.oneOf(["primary", "secondary"]),
	variant: PropTypes.oneOf(["main", "outlined", "list"]),
};

LinkButton.defaultProps = {
	color: "primary",
	variant: "main",
};
