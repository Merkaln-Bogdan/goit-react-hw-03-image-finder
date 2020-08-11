import React from "react";
import style from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";
const ImageGalleryItem = ({ img, id, show }) => (
  <>
    <li
      className={style.ImageGalleryItem}
      key={id}
      onClick={() => show(img.largeImageURL)}
    >
      <img
        className={style.ImageGalleryItemImage}
        src={img.webformatURL}
        alt={img.tags}
        width="320"
        height="180"
      />
    </li>
  </>
);
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  show: PropTypes.func.isRequired,
};
