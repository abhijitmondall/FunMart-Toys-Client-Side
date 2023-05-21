import { useContext } from "react";
import Styles from "./Login.module.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { AuthContext } from "../../../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Card from "../../UI/Card/Card";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";
import PageTitle from "../../PageTitle/PageTitle";

const Login = () => {
  const { user, login, error, setError, loginWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const path = location?.state?.from?.pathname || "/";

  let isSuccess = null;

  const loginFormSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      await login(email, password);
      navigate(path, { replace: true });
    } catch (err) {
      isSuccess = false;
      setError(err.message);
    }
  };

  const googleLogin = async () => {
    try {
      const res = await loginWithGoogle();
      navigate(path, { replace: true });

      if (!res.ok) throw new Error(res.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className={`${Styles["login"]} container`}>
      <PageTitle>FunMart Toys | Login</PageTitle>

      <div className={`${Styles["login-wrap"]}`}>
        {user ? (
          <div className="d-flex text-2x color-title p-y">
            You are now logged in!
          </div>
        ) : (
          <Card className={{ className: Styles["form"] }}>
            <form onSubmit={loginFormSubmitHandler}>
              <h1 className={`${Styles["form__title"]} d-flex`}>
                <span className="text-color icon-1x">
                  <IoMdLogIn />
                </span>
                Login Now
              </h1>

              <p className="error-message">{!isSuccess ? error : ""}</p>

              <div className={Styles["form__input"]}>
                <Input
                  inputObj={{
                    type: "email",
                    placeholder: "Enter Your Email",
                    name: "email",
                    required: true,
                  }}
                />
              </div>

              <div className={Styles["form__input"]}>
                <Input
                  inputObj={{
                    type: "password",
                    placeholder: "Enter Your Password",
                    name: "password",
                    required: true,
                  }}
                />
              </div>

              <Button
                btnObj={{ type: "submit" }}
                className={{ className: Styles["form__btn"] }}
              >
                Login
              </Button>

              <p className={Styles["register-now"]}>
                Don't have an account? <Link to="/register">Register Now</Link>
              </p>
            </form>

            <p className="text-center p-y">OR</p>

            <Button
              btnObj={{ onClick: googleLogin }}
              className={{ className: `login-btn d-flex p-1x` }}
            >
              <span className="icon-1x">
                <FcGoogle />
              </span>
              Login With Google
            </Button>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Login;
