import React from "react";
import Styles from "./Input.module.scss";

const Input = ({ inputObj }) => {
  return (
    <>
      <input {...(inputObj || "")} className={Styles["input"]} />
    </>
  );
};

export default Input;
