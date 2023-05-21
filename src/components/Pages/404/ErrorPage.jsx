import Styles from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import ErrorImg from "./../../../assets/error.svg";
import PageTitle from "../../PageTitle/PageTitle";

const ErrorPage = () => {
  return (
    <>
      <section className={Styles["error"]}>
        <PageTitle>FunMart Toys | Not Found</PageTitle>

        <div className={Styles["error__wrap"]}>
          <h3 className={Styles["error__title"]}>Not Found!</h3>
          <img src={ErrorImg} alt="" className={Styles["error__img"]} />

          <Link to="/">
            <Button className={Styles["error__btn"]}>Go To Home</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
