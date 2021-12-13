import { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "../buttons/iconButton";
import { StyledGallery, StyledGalleryItem } from "./styles";

function GalleryItem({ id, src, color, isFavourite, onFavourite }) {
	const [favourite, setFavourite] = useState(isFavourite);
	const favouriteIcon = favourite ? "favorite" : "favorite_border";

	return (
		<StyledGalleryItem $src={src} $active={favourite} $color={color}>
			<div></div>
			<IconButton
				icon={favouriteIcon}
				onClick={() => {
					const action = favourite ? "remove" : "add";
					onFavourite(id, action);
					setFavourite(!favourite);
				}}
			/>
		</StyledGalleryItem>
	);
}

export default function Gallery({
	label,
	color,
	images,
	favourites,
	onFavourite,
}) {
	return (
		<StyledGallery>
			{images.map((image) => {
				const { id, url } = image;
				const isFavourite =
					favourites.filter((fav) => fav === id).length > 0;
				return (
					<GalleryItem
						key={id}
						id={id}
						src={url}
						alt={label}
						color={color}
						isFavourite={isFavourite}
						onFavourite={(id, action) => onFavourite(id, action)}
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
	favourites: PropTypes.arrayOf(PropTypes.string),
	onFavourite: PropTypes.func,
};

GalleryItem.propTypes = {
	color: PropTypes.oneOf(["primary", "secondary"]),
	id: PropTypes.string,
	src: PropTypes.string,
	isFavourite: PropTypes.bool,
	onFavourite: PropTypes.func,
};

GalleryItem.defaultProps = {
	color: "primary",
};
