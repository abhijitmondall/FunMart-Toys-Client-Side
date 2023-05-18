import Styles from "./Logo.module.scss";
import { MdToys } from "react-icons/md";

const Logo = () => {
  return (
    <>
      <div className={Styles["header__logo-wrap"]}>
        <span className={Styles["header__logo"]}>
          <MdToys />
        </span>
        <h3 className={Styles["header__logo-text"]}>FunMart Toys</h3>
      </div>
    </>
  );
};

export default Logo;
