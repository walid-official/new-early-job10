import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterLottieJson from "../../assets/images/register1.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, regex } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    document.title = "Edu-Service | Register";
  }, []);

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage({});

    if (password.length < 6) {
      setErrorMessage((prev) => ({
        ...prev,
        password: "You must commit 6 characters",
      }));
      return;
    }
    if (!regex.test(password)) {
      setErrorMessage((prev) => ({
        ...prev,
        password:
          "You must commit one uppercase, one lowercase, and min 6 characters",
      }));
      return;
    }

    try {
      const userCredential = await createUser(email, password);
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL,
      });
      console.log("User Registered", userCredential);
      navigate("/");
      toast.success("Successfully Registered Your Account");
    } catch (error) {
      console.log("Error Registering User", error);
      setErrorMessage((prev) => ({ ...prev, register: error.message }));
      toast.error("Registration failed");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-[50%]">
          <Lottie animationData={RegisterLottieJson} loop={true} />;
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleRegisterForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="PhotoURl"
                name="photoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
              {errorMessage.register && (
                <label className="label">
                  <span className="label-text text-red-500">
                    {errorMessage.register}
                  </span>
                </label>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute right-3 top-[52px]"
              >
                {showPassword ? (
                  <i className="text-xl">
                    <FaEyeSlash></FaEyeSlash>
                  </i>
                ) : (
                  <i className="text-xl">
                    <FaEye></FaEye>
                  </i>
                )}
              </div>
              {errorMessage.password && (
                <label className="label">
                  <span className="label-text text-red-500">
                    {errorMessage.password}
                  </span>
                </label>
              )}
              <label className="text-sm py-3">
                Already have an account ? Please{" "}
                <Link to="/login" className="text-[#8e67f1]">
                  Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white">
                Register
              </button>
            </div>
            <GoogleLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
