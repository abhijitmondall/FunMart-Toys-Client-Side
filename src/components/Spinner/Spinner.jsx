import Styles from "./Spinner.module.scss";
import icons from "./../../assets/icons.svg";
import { createPortal } from "react-dom";

const Spinner = () => {
  return (
    <>
      {createPortal(
        <div className={Styles["spinner"]}>
          <svg className={Styles["spinner__icon"]}>
            <use xlinkHref={`${icons}#icon-spinner3`}></use>
          </svg>
        </div>,
        document.getElementById("spinner")
      )}
    </>
  );
};

export default Spinner;
