import React from "react";
import style from "./Modal.module.css";
// import PropTypes from "prop-types";

const Modal = (props) => (
  <>
    <div className={style.Overlay}>
      <div className={style.Modal}>
        {props.children}
        <div
          className={style.ModalButtonClose}
          onClick={() => props.closeImage()}
        >
          Close
        </div>
      </div>
    </div>
  </>
);

export default Modal;
