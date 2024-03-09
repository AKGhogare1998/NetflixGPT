import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/UserSlice";

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

  return (
    <div className="absolute w-screen z-10 flex justify-between bg-gradient-to-b from-black">
      <img
        className="w-44 px-8 py-2"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      ></img>
      <div className="flex">
        <button className="p-3 mx-5 text-bold text-white" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
