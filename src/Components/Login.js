import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG_IMG, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (event) => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);

    if (message) return; //error msg returned

    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="brightness-50" src={LOGIN_BG_IMG} alt="body" />
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
            ref={name}
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
