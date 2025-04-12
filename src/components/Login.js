import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setisSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm)

  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web_auto_scroll/IN-en-20250407-TRIFECTA-cb747430-8b29-49c7-a44a-002bda9cc7cb_large.jpg"
          alt=""
        />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web_auto_scroll/IN-en-20250407-TRIFECTA-cb747430-8b29-49c7-a44a-002bda9cc7cb_large.jpg"
          alt=""
        />
      </div>
      <form className="p-12 w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl P-4 my-4">{isSignInForm? "Sign in":"Sign up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Enter your name"
          className="p-2 my-2 w-full bg-gray-500"
        />}
        <input
          type="text"
          placeholder="Email address"
          className="p-2 my-2 w-full bg-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full  bg-gray-500"
        />
        <button className="p-4 my-4 w-full bg-red-800 rounded-xl">submit</button>
        <p className="font-bold cursor-pointer " onClick={toggleSignInForm}>{isSignInForm? "New to netflix?? Sign up":"Already a user Sign in"}</p>
      </form>
    </div>
  );
};

export default Login;
