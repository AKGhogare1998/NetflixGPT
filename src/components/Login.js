import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { backgroundImage } from "../utils/constants";

const Login = () => {
  const [isSignInFom, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInFom);
  };

  const handleButtonClick = () => {
    //validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //sign up form logic
    if (!isSignInFom) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          dispatch(
            addUser({
              uid: "uid",
              email: "akshayghogare98@gmail.com",
              displayName: "Akshay Ghogare",
            })
          );
          navigate("/browse");
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          navigate("/browse");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={backgroundImage} alt="background"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 text-white absolute bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInFom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFom && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        {/* //Error message */}
        <p className="text-red-500 ">{errorMessage}</p>
        <button
          className="p-4 my-6 cursor-pointer bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInFom ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray cursor-pointer" onClick={toggleSignInForm}>
          {isSignInFom ? "New to Netflix? Sign Up" : "Already register Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
