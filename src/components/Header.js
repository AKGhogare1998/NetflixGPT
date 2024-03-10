import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/UserSlice";
import { useEffect } from "react";
import { logo } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSignOut = () => {
    dispatch(removeUser());
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //this event listner need to set only once hence useEffect use
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        //dispatch(removeUser());
      }
    });

    //when component unmounts/destroy
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handlelanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen z-10 flex justify-between bg-gradient-to-b from-black">
      <img className="w-44 px-8 py-2" src={logo} alt="netflix-logo"></img>
      <div className="flex mb-3">
        {showGptSearch && (
          <select
            className="bg-black text-white p-2"
            onChange={handlelanguageChange}
          >
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
          </select>
        )}
        <button
          className="py-2 px-4 m-2 text-bold text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Home Page" : "GPT Search"}
        </button>
        <button
          className="p-3 mx-3 mr-3 text-bold  text-white rounded-lg"
          onClick={onSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
