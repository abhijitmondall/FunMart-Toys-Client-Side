import Styles from "./Logo.module.scss";
import { MdToys } from "react-icons/md";

const Logo = () => {
  return (
    <>
      <div className={Styles["header__logo-wrap"]}>
        <span className={Styles["header__logo"]}>
          <MdToys />
        </span>
        <p className={Styles["header__logo-text"]}>FunMart Toys</p>
      </div>
    </>
  );
};

export default Logo;
