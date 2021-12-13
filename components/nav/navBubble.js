import PropTypes from "prop-types";
import styled from "styled-components";
import BubbleButton from "../buttons/bubbleButton";

const StyledNavBubble = styled.div`
	position: fixed;
	right: ${({ theme }) => theme.spacing.large};
	bottom: ${({ theme }) => theme.spacing.large};
	z-index: 10;
	transform: scale(0);
	animation: pop 0.3s 0.3s forwards;
	[class*="material-icons"] {
		padding-top: 2px;
	}
`;

export default function NavBubble({ path, label, icon }) {
	return (
		<StyledNavBubble>
			<BubbleButton path={path} icon={icon} label={label} />
		</StyledNavBubble>
	);
}

NavBubble.propTypes = {
	path: PropTypes.string,
	label: PropTypes.string,
	icon: PropTypes.string,
};

NavBubble.defaultProps = {
	size: "normal",
};
