import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import IconButton from "../buttons/iconButton";
import { StyledGallery, StyledGalleryItem } from "./styles";
import { addFavourite } from "../../pages/favourites";

function GalleryItem({ id, src, color }) {
	const [isFavourite, setIsFavourite] = useState(false);

	useEffect(() => {
		if (isFavourite) {
			addFavourite({ id: id, url: src });
		}
	}, [isFavourite]);

	const favouriteIcon = isFavourite ? "favorite" : "favorite_border";

	return (
		<StyledGalleryItem $src={src} $active={isFavourite} $color={color}>
			<div></div>
			<IconButton
				icon={favouriteIcon}
				onClick={() => setIsFavourite((current) => !current)}
			/>
		</StyledGalleryItem>
	);
}

export default function Gallery({ label, color, images }) {
	return (
		<StyledGallery>
			{images.map((image) => {
				const { id, url } = image;
				return (
					<GalleryItem
						key={id}
						id={id}
						src={url}
						alt={label}
						color={color}
					/>
				);
			})}
		</StyledGallery>
	);
}

Gallery.propTypes = {
	label: PropTypes.string,
	color: PropTypes.oneOf(["primary", "secondary"]),
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			url: PropTypes.string,
		})
	),
};

GalleryItem.propTypes = {
	color: PropTypes.oneOf(["primary", "secondary"]),
	id: PropTypes.string,
	src: PropTypes.string,
};

GalleryItem.defaultProps = {
	color: "primary",
};
