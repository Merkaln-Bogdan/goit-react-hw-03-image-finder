import React from "react";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

export default function ImageGallery({ gallery, show }) {
  return (
    <div>
      <ul className={style.ImageGallery}>
        {gallery.map((img) => (
          <ImageGalleryItem img={img} key={img.id} show={show} />
        ))}
      </ul>
    </div>
  );
}
ImageGallery.propTypes = {
  Show: PropTypes.func.isRequired,
  gallery: PropTypes.array.isRequired,
};
