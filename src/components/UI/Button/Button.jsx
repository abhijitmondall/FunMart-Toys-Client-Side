import React from "react";
import Styles from "./Button.module.scss";

const Button = ({ btnObj, className, children }) => {
  return (
    <>
      <button
        {...(btnObj || "")}
        className={`${Styles["btn"]} ${className?.className || ""}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
