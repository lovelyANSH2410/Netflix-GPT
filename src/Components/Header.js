import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    //Toggle my gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-64 mx-auto md:mx-0" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex justify-around">
          {showGpt && (
            <select
              className="w-40 h-12 px-5 mt-6 mr-5 rounded-md bg-gray-900 opacity-80 font-semibold text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="w-30 h-12 px-5 mt-6  text-white rounded-md shadow-md bg-purple-800 p-2 font-bold"
            onClick={handleGPTSearchClick}
          >
            {showGpt ? "Home" : "Movie Ai✨"}
          </button>
          <img
            className=" h-12 mt-6 m-4 rounded-full"
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="md:w-20 px-2 h-12 md:h-12 mt-6 mr-0 md:mr-10 rounded-md bg-red-600 text-white font-semibold"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
