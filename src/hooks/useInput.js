import { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isInputValid = validateValue(inputValue);
  const hasError = !isInputValid && isTouched;

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    // setError("Password must be at least 6 characters long");
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: inputValue,
    isInputValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
