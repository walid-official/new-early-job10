import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOUt = () => {
    userSignOut().then(() => {
      navigate("/login");
    });
  };

  const handleThemeChange = (e) => {
    const theme = e.target.checked ? "aqua" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  };

  const Links = (
    <>
      <NavLink to="/">
        {" "}
        <li className="pt-2 font-bold">Home</li>{" "}
      </NavLink>
      <NavLink to="/allServices">
        {" "}
        <li className="pt-2 font-bold">Services</li>{" "}
      </NavLink>
    
      <NavLink to="/about">
        {" "}
        <li className="pt-2 font-bold">About</li>{" "}
      </NavLink>
      <NavLink to="/contact">
        {" "}
        <li className="pt-2 font-bold">Contact</li>{" "}
      </NavLink>
        
      {user && (
        <li>
          <details>
            <summary className="font-bold">DashBoard</summary>
            <ul className=" w-full md:w-72 z-10">
              <NavLink to="/add-service">
                {" "}
                <li className="py-2 font-bold">Add Service</li>{" "}
              </NavLink>
              <NavLink to="/ManageService">
                {" "}
                <li className="py-2 font-bold">Manage Service</li>{" "}
              </NavLink>
              <NavLink to="/BookedServices">
                {" "}
                <li className="py-2 font-bold">Booked-Services</li>{" "}
              </NavLink>
              <NavLink to="/Service-to-do">
                {" "}
                <li className="py-2 font-bold">Service-To-Do</li>{" "}
              </NavLink>
            </ul>
          </details>
        </li>
        
      )}
    </>
  );
  return (
    <div className="sticky top-0 backdrop-blur-xl bg-white/30 z-10">
      <div className="navbar py-6 border-b w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          {/* LOGO DIV */}
          <NavLink to="/" className="flex gap-2 items-center">
            <div className="">
              <img
                className="w-16"
                src="https://cdn-icons-png.flaticon.com/512/4319/4319160.png"
                alt=""
              />
            </div>
            <div className="md:flex hidden">
              <h2 className="font-bold text-xl">EduSphere</h2>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8 font-medium">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="pr-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleThemeChange}
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <div className="md:hidden flex">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Click
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                {user ? (
                  <div className="flex gap-3 items-center">
                    <Link
                      onClick={handleSignOUt}
                      className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white"
                    >
                      Logout
                    </Link>
                    {user ? (
                      <div
                        className="tooltip tooltip-bottom"
                        data-tip={user?.displayName}
                      >
                        <img
                          referrerPolicy="no-referrer"
                          src={user?.photoURL}
                          alt=""
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      </div>
                    ) : (
                      <div className="btn bg-[#8e67f1] flex justify-center items-center w-12 h-12 rounded-full"></div>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white"
                  >
                    Login
                  </Link>
                )}
              </ul>
            </div>
          </div>

          {/* Show In Large Device */}
          <div className="md:flex hidden">
            {user ? (
              <div className="flex gap-3 items-center">
                <Link
                  onClick={handleSignOUt}
                  className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white"
                >
                  Logout
                </Link>
                {user ? (
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user?.displayName}
                  >
                    <img
                      referrerPolicy="no-referrer"
                      src={user?.photoURL}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                ) : (
                  <div className="btn bg-[#8e67f1] flex justify-center items-center w-12 h-12 rounded-full"></div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white"
              >
                Login
              </Link>
            )}
          </div>

          {/* <Link to="/register" className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white">Login / Register</Link>
           <Link to="/register" className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white">Login / Register</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
