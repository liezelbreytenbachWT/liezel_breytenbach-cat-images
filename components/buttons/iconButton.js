import Link from "next/link";
import PropTypes from "prop-types";
import { StyledIconButton } from "./styles";

export default function IconButton({ icon, color, onClick }) {
	return (
		<StyledIconButton $color={color} onClick={onClick}>
			<span className="material-icons-outlined">{icon}</span>
		</StyledIconButton>
	);
}

IconButton.propTypes = {
	icon: PropTypes.string,
	color: PropTypes.oneOf(["primary", "secondary"]),
	onClick: PropTypes.func,
};

IconButton.defaultProps = {
	color: "primary",
};
