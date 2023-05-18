import Styles from "./Header.module.scss";

import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={`${Styles["header"]} container`}>
      <div className={`${Styles["header__wrap"]}`}>
        <Logo />

        <nav className={Styles["header__nav"]}>
          <ul className={Styles["header__nav-lists"]}>
            <li className={Styles["header__nav-item"]}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${Styles["header__nav-link-active"]}`
                    : `${Styles["header__nav-link"]}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className={Styles["header__nav-item"]}>
              <NavLink
                to="/allToys"
                className={({ isActive }) =>
                  isActive
                    ? `${Styles["header__nav-link-active"]}`
                    : `${Styles["header__nav-link"]}`
                }
              >
                All Toys
              </NavLink>
            </li>

            <li className={Styles["header__nav-item"]}>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? `${Styles["header__nav-link-active"]}`
                    : `${Styles["header__nav-link"]}`
                }
              >
                Blogs
              </NavLink>
            </li>

            <li className={Styles["header__nav-item"]}>
              <NavLink
                to="/myToys"
                className={({ isActive }) =>
                  isActive
                    ? `${Styles["header__nav-link-active"]}`
                    : `${Styles["header__nav-link"]}`
                }
              >
                My Toys
              </NavLink>
            </li>

            <li className={Styles["header__nav-item"]}>
              <NavLink
                to="/addToy"
                className={({ isActive }) =>
                  isActive
                    ? `${Styles["header__nav-link-active"]}`
                    : `${Styles["header__nav-link"]}`
                }
              >
                Add A Toy
              </NavLink>
            </li>

            <li
              className={`${Styles["header__nav-item"]} ${Styles["header__login-btn"]}`}
            >
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? `${Styles["header__nav-link-active"]}`
                    : `${Styles["header__nav-link"]}`
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
          <button className={Styles["header__btn"]}>
            <IoIosMenu />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
