import React from "react";
import style from "./Notification.module.css";
export default function Notification({ message }) {
  return (
    <div>
      <p className={style.Notification}>{message}</p>
    </div>
  );
}
