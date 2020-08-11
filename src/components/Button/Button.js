import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ fetchGallery }) => (
  <>
    <button type="button" className={style.Button} onClick={fetchGallery}>
      Load more
    </button>
  </>
);
export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
