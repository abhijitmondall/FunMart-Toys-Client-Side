import { useContext } from "react";
import Styles from "./Register.module.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { AuthContext } from "../../../context/AuthProvider";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import Card from "../../UI/Card/Card";
import { IoMdLogIn } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import PageTitle from "../../PageTitle/PageTitle";

const Register = () => {
  const { user, createUser, updateUserProfile, setError, loginWithGoogle } =
    useContext(AuthContext);

  const {
    isInputValid: nameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((val) => val.trim() !== "");

  const {
    value: passwordInputValue,
    isInputValid: passwordIsValid,
    hasError: passwordInputHasError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((val) => val.trim().length >= 6);

  const {
    isInputValid: emailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((val) =>
    val.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );

  const {
    isInputValid: confirmIsValid,
    hasError: confirmInputHasError,
    inputChangeHandler: confirmChangeHandler,
    inputBlurHandler: confirmBlurHandler,
  } = useInput((val) => val === passwordInputValue);

  const {
    isInputValid: photoIsValid,
    hasError: photoInputHasError,
    inputChangeHandler: photoChangeHandler,
    inputBlurHandler: photoBlurHandler,
  } = useInput((val) => val.trim() !== "");

  let formIsValid = false;

  if (
    passwordIsValid &&
    emailIsValid &&
    confirmIsValid &&
    nameIsValid &&
    photoIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      if (!formIsValid) return;

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;
      const photo = form.photo.value;

      if (password !== confirm) throw new Error("Password does not match");

      await createUser(email, password);
      await updateUserProfile(name, photo);

      form.reset();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const googleLogin = async () => {
    try {
      const res = await loginWithGoogle();

      if (!res.ok) throw new Error(res.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className={`${Styles["register"]} container`}>
    
        <PageTitle>FunMart Toys | Register</PageTitle>
  

      <div className={Styles["register-wrap"]}>
        {user ? (
          <div className="d-flex text-2x color-title p-y">
            You have already registered!
          </div>
        ) : (
          <Card className={{ className: Styles["form"] }}>
            <form onSubmit={formSubmitHandler}>
              <h1 className={`${Styles["form__title"]} d-flex`}>
                <span className="text-color icon-1x">
                  <IoMdLogIn />
                </span>
                Register Now
              </h1>

              <div className={Styles["form__input"]}>
                <Input
                  inputObj={{
                    type: "text",
                    placeholder: "Full Name",
                    name: "name",
                    required: true,
                    onChange: nameChangeHandler,
                    onBlur: nameBlurHandler,
                  }}
                />

                <p className="error-message">
                  {nameInputHasError && "Please enter your full name! ⚠"}
                </p>
              </div>

              <div className={Styles["form__input"]}>
                <Input
                  inputObj={{
                    type: "email",
                    placeholder: "Email Address",
                    name: "email",
                    required: true,
                    onChange: emailChangeHandler,
                    onBlur: emailBlurHandler,
                  }}
                />
                <p className="error-message">
                  {emailInputHasError &&
                    "Please enter a valid email address! ⚠"}
                </p>
              </div>

              <div className={Styles["form__input"]}>
                <Input
                  inputObj={{
                    type: "password",
                    placeholder: "Password",
                    name: "password",
                    required: true,
                    onChange: passwordChangeHandler,
                    onBlur: passwordBlurHandler,
                  }}
                />
                <p className="error-message">
                  {passwordInputHasError &&
                    "Password must have at least 6 characters long! ⚠"}
                </p>
              </div>

              <div className={Styles["form__input"]}>
                <Input
                  inputObj={{
                    type: "password",
                    placeholder: "Confirm Password",
                    name: "confirm",
                    required: true,
                    onChange: confirmChangeHandler,
                    onBlur: confirmBlurHandler,
                  }}
                />
                <p className="error-message">
                  {confirmInputHasError && "Passwords do not match! ⚠"}
                </p>
              </div>

              <div className={Styles["form__input"]}>
                <Input
                  inputObj={{
                    type: "text",
                    placeholder: "Photo URL",
                    name: "photo",
                    required: true,
                    onChange: photoChangeHandler,
                    onBlur: photoBlurHandler,
                  }}
                />

                <p className="error-message">
                  {photoInputHasError && "Please enter your photo URL! ⚠"}
                </p>
              </div>

              <Button
                btnObj={{ type: "submit", disabled: !formIsValid }}
                className={{ className: Styles["form__btn"] }}
              >
                Register
              </Button>

              <p className={Styles["login-now"]}>
                Already have an account? <Link to="/login">Login Now</Link>
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
              Sign Up With Google
            </Button>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Register;
