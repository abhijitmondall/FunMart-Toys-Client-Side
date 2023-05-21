import Styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Button from "../UI/Button/Button";
import { GiCrossedSwords } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);

  const logoutHandler = () => {
    try {
      logout();
    } catch (err) {
      console.log(err);
    }
  };

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className={`${Styles["header"]} container`}>
      <div className={`${Styles["header__wrap"]}`}>
        <div className={Styles["header__logo"]}>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <nav className={`${Styles["header__nav"]}`}>
          <ul
            className={`${Styles["header__nav-lists"]} ${
              isClicked && Styles["header__nav-lists-active"]
            }`}
          >
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
            {user && (
              <>
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
              </>
            )}
            <li
              className={`${Styles["header__nav-item"]} ${Styles["header__login-btn"]}`}
            >
              {user ? (
                <div className={Styles["header__user-wrap"]}>
                  <img
                    title={user?.displayName || ""}
                    src={user.photoURL}
                    alt=""
                    className={Styles["header__user-photo"]}
                  />

                  <div className={Styles["logout-btn"]}>
                    <Button btnObj={{ onClick: logoutHandler }}>Logout</Button>
                  </div>
                </div>
              ) : (
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
              )}
            </li>
          </ul>

          <figure onClick={clickHandler} className={Styles["mobile"]}>
            {isClicked ? (
              <GiCrossedSwords className={Styles["mobile__icon"]} />
            ) : (
              <HiMenu className={Styles["mobile__icon"]} />
            )}
          </figure>
        </nav>
      </div>
    </header>
  );
};

export default Header;
