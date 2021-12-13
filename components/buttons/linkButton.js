import { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Loader from "../loader";
import { StyledButton } from "./styles";

export default function LinkButton({ path, children, color, variant }) {
	const [showLoader, setShowLoader] = useState(false);
	return (
		<>
			<StyledButton
				$variant={variant}
				$color={color}
				onClick={() => setShowLoader(true)}
			>
				<Link href={path}>{children}</Link>
			</StyledButton>
			{showLoader && <Loader />}
		</>
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
