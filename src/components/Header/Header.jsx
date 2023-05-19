import Styles from "./Header.module.scss";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Button from "../UI/Button/Button";

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
              {/* <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? `${Styles["header__nav-link-active"]}`
                    : `${Styles["header__nav-link"]}`
                }
              >
                Login
              </NavLink> */}

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
          {/* <button className={Styles["header__btn"]}>
            <IoIosMenu />
          </button> */}

          {/* <div className={Styles["header__user"]}>
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
                    ? `${Styles["header__link-active"]}`
                    : `${Styles["header__link"]}`
                }
              >
                Login
              </NavLink>
            )}
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
