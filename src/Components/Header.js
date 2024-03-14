import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-64"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex">
        <img
          className=" h-12 mt-8 m-4 rounded-full"
          src={user?.photoURL}
          alt="usericon"
        />
        <button
          onClick={handleSignOut}
          className="w-20 h-12 mt-8 rounded-md bg-red-600 p-2 text-white font-semibold"
        >
          Sign out
        </button>
      </div>}
    </div>
  );
};

export default Header;
