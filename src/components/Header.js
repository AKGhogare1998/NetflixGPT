import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/UserSlice";
import { useEffect } from "react";
import { logo } from "../utils/constants";

const Header = () => {
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

  return (
    <div className="absolute w-screen z-10 flex justify-between bg-gradient-to-b from-black">
      <img className="w-44 px-8 py-2" src={logo} alt="netflix-logo"></img>
      <div className="flex">
        <button className="p-3 mx-5 text-bold text-white" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
