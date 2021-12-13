import Link from "next/link";
import PropTypes from "prop-types";
import { StyledBubble, StyledBubbleContent, StyledBubbleLabel } from "./styles";

export default function BubbleButton({ path, icon, label }) {
	return (
		<StyledBubble>
			<Link href={path}>{label}</Link>
			<StyledBubbleContent>
				<span className="material-icons-outlined">{icon}</span>
				<StyledBubbleLabel>{label}</StyledBubbleLabel>
			</StyledBubbleContent>
		</StyledBubble>
	);
}

BubbleButton.propTypes = {
	path: PropTypes.string,
	icon: PropTypes.string,
	label: PropTypes.string,
};
