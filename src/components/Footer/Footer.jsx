import { Link } from "react-router-dom";
import Styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <>
      <footer className={`${Styles["footer"]} container`}>
        <section className={`${Styles["footer__container"]}`}>
          <div className={`${Styles["footer__wrap"]}`}>
            <div className={Styles["footer__info"]}>
              <Logo />

              <p>
                Discover captivating toy cars that fuel imagination at FunMart
                Toys! Explore our collection for endless playtime adventures.
                Shop now and let the excitement begin!
              </p>
            </div>
            <div className={Styles["footer__info"]}>
              <h5>Useful Links</h5>

              <span>
                <Link to="/allToys">Shop</Link>
              </span>
              <span>
                <Link to="/blogs">Blogs</Link>
              </span>
              <span>
                <Link to="/register">Register</Link>
              </span>
              <span>
                <Link to="/login">Login</Link>
              </span>
            </div>

            <div className={Styles["footer__info"]}>
              <h5>Support</h5>
              <span>Help Desk</span>
              <span>Communities</span>
              <span>Become a Partner</span>
              <span>Developers</span>
            </div>
            <div className={Styles["footer__info"]}>
              <h5>Contact</h5>
              <span>524 Broadway , NYC</span>
              <span>+1 777 - 978 - 5570</span>
            </div>
          </div>
          <div className={Styles["footer__text"]}>
            <p>@2023 FunMart Toys. All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
