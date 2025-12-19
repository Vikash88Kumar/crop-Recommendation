import React, { useState } from "react";
import LoginForm from "../components/register/Login";
import SignUpForm from "../components/register/Signup";

const Page = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleSignUpMode = () => setIsSignUpMode((prev) => !prev);

  const buttonClasses =
    "w-full text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md";

  const buttonForGFT =
    "inline-flex w-full justify-center items-center rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 shadow-sm transition-all duration-200 hover:shadow hover:border-gray-400";

  const backgroundUrl =
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop";

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* FORMS CONTAINER */}
      <div className="absolute w-full h-full top-0 left-0">
        <div
          className={`absolute top-[95%] lg:top-1/2 left-1/2 grid grid-cols-1 z-[5]
          -translate-x-1/2 -translate-y-full lg:-translate-y-1/2
          lg:w-1/2 w-full transition-all duration-700 ease-in-out
          ${isSignUpMode ? "lg:left-1/4" : "lg:left-3/4"}`}
        >
          {/* LOGIN FORM */}
          <div
            className={`flex items-center justify-center flex-col overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 px-6 transition-all duration-500
            ${isSignUpMode ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
          >
            <LoginForm
              buttonClasses={buttonClasses}
              buttonForGFT={buttonForGFT}
            />
          </div>

          {/* SIGNUP FORM */}
          <div
            className={`flex items-center justify-center flex-col overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 px-6 transition-all duration-500
            ${isSignUpMode ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          >
            <SignUpForm
              buttonClasses={buttonClasses}
              buttonForGFT={buttonForGFT}
            />
          </div>
        </div>
      </div>

      {/* SIDE PANELS */}
      <div className="absolute h-full w-full top-0 left-0 grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT PANEL */}
        <div
          className={`flex flex-row justify-around lg:flex-col items-center lg:items-end text-center z-[6]
          pl-[12%] pr-[17%] pt-12 pb-8
          ${isSignUpMode ? "pointer-events-none" : "pointer-events-auto"}`}
        >
          <div
            className={`transition-transform duration-700 ease-in-out
            ${isSignUpMode ? "lg:-translate-x-[800px]" : ""}`}
          >
            <h3 className="font-semibold text-[1.2rem] lg:text-[1.5rem] text-white">
              New to Smart Farming?
            </h3>
            <p className="text-[0.8rem] lg:text-[1rem] py-2 text-white">
              Register to get free, AI-powered crop recommendations suited to
              your soil, season, and region.
            </p>
            <button
              className="bg-transparent w-[130px] h-[41px] text-white font-semibold border-2 border-white rounded-full transition-colors duration-300 hover:bg-green-700 hover:text-white"
              onClick={toggleSignUpMode}
            >
              Sign up
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className={`flex flex-row lg:flex-col items-center lg:items-end justify-around text-center z-[6]
          pl-[17%] pr-[12%] pt-12 pb-8
          ${isSignUpMode ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <div
            className={`transition-transform duration-700 ease-in-out
            ${isSignUpMode ? "" : "lg:translate-x-[800px]"}`}
          >
            <h3 className="font-semibold text-[1.2rem] lg:text-[1.5rem] text-white">
              Already registered?
            </h3>
            <p className="py-2 text-[0.8rem] lg:text-[1rem] text-white">
              Sign in to access crop guidance and farming tips based on your data.
            </p>
            <button
              className="w-[130px] h-[41px] text-white bg-transparent font-semibold border-2 border-white rounded-full transition-colors duration-300 hover:bg-green-700 hover:text-white"
              onClick={toggleSignUpMode}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
