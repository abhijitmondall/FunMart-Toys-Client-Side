import React from "react";
import Styles from "./Card.module.scss";

const Card = ({ className, children }) => {
  return (
    <div className={`${Styles["card"]} ${className?.className || ""}`}>
      {children}
    </div>
  );
};

export default Card;
