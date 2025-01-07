import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import loginLottieJson from "../../assets/images/login.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const { createSignInUser, regex } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Edu-Service | Login";
  }, []);

  const handleSignInUser = async (data) => {
    const { email, password } = data;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (!regex.test(password)) {
      toast.error(
        "Password must include at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    try {
      await createSignInUser(email, password);
      toast.success("Successfully Logged in");
      navigate(location?.state || "/");
    } catch (error) {
      console.error("Login Error: ", error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-50%">
          <Lottie animationData={loginLottieJson} loop={true} />;
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form
            onSubmit={handleSubmit(handleSignInUser)}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="label-text text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[52px] cursor-pointer"
              >
                {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
              </div>
              {errors.password && (
                <span className="label-text text-red-500">
                  {errors.password.message}
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="text-sm">
                Don't have an account? Please
                <Link to="/register" className="text-[#8e67f1]">
                  Register
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white"
              >
                Login
              </button>
            </div>
            <GoogleLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
