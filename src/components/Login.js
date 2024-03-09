import Header from "./Header";
import { useState } from "react";

const Login = () =>{
const [isSignInFom, setSignInForm] = useState(true);
const toggleSignInForm = () =>{
    setSignInForm(!isSignInFom);
}

return <div>
    <Header />
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" ></img>
    </div>
    <form className="w-3/12 p-12 text-white absolute bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-md">
        <h1 className="font-bold text-3xl py-4">{isSignInFom ? "Sign In" : "Sign Up"}</h1>
        {!isSignInFom && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" ></input>}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" ></input>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" ></input>
        <button className="p-4 my-6 cursor-pointer bg-red-600 w-full rounded-lg">{isSignInFom ? "Sign In" : "Sign Up"}</button>
        <p className="text-gray cursor-pointer" onClick={toggleSignInForm}>{isSignInFom ? "New to Netflix? Sign Up" : "Already register Sign In"}</p>
    </form>
</div>
}

export default Login;