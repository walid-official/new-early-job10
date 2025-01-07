import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <div className="">
          <img
            src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
            alt=""
          />
        </div>
        <div className="text-center">
          <NavLink to="/">
            <button className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white w-[50%] mx-auto">
              GO Back
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
