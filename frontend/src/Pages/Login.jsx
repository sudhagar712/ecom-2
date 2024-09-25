import React, { useState } from "react";
import video from "../assets/Videos/bannervideo3.mp4";

const Login = () => {
  const [currentState, setCurrentState] = useState("Signup");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col  border p-10 items-center w-[90%] sm:w-[40%] m-auto  gap-4 text-gray-800  bg-transparent  rounded-lg"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-20">
          <p className="font-extrabold text-white text-3xl sm:text-5xl">
            {currentState}
          </p>
          <hr className="border-none h-[2px] w-10 bg-gray-800" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            className="w-full px-3 py-2 border border-gray-300"
            type="text"
            placeholder="Enter a Name"
            required
          />
        )}

        <input
          className="w-full px-3 py-2 border border-gray-300"
          type="email"
          placeholder="Enter an Email Address"
          required
        />
        <input
          className="w-full px-3 py-2 border border-gray-300"
          type="password"
          placeholder="Enter a Password"
          required
        />

        <div className="w-full flex justify-between text-sm mt-[10px]">
          {currentState === "Login" ? (
            <p className="text-white font-bold ">Forget Password?</p>
          ) : (
            ""
          )}

          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign up")}
              className="cursor-pointer text-white font-bold"
            >
              Create an account?
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-white font-bold"
            >
              Login Here
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-black text-white w-full px-3 py-2 font-bold"
        >
          {currentState === "Login" ? "Login" : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Login;
