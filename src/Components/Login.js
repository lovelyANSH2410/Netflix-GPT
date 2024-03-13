import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (event) => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="body"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col bg-black  w-3/12  my-44 p-10 mx-auto right-0 left-0 text-white bg-opacity-70"
      >
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-red-600 ml-4 font-semibold">{errorMsg}</p>
        {!isSignInForm && (
          <input
            type="name"
            placeholder="Full Name"
            className="p-4 m-4 bg-gray-900 bg-opacity-35 border border-white"
          ></input>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or phone number"
          className="p-4 m-4 bg-gray-900 bg-opacity-35 border border-white"
        ></input>

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 m-4 bg-gray-800 bg-opacity-35 border border-white"
        ></input>
        <button
          type="submit"
          className="p-3 my-8 mx-4 bg-red-700 font-semibold rounded-md shadow-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mx-auto">Forgot password?</p>
        <p
          className="mx-auto my-10 cursor-pointer font-bold"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Alread a user? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
