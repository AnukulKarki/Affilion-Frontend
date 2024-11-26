import { useState } from "react";
import { Link } from "react-router-dom";
import LoginBg from "../../assets/images/login-bg.png";
import GoogleIcon from "../../assets/images/google-icon.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex justify-center items-center font-sans bg-white md:bg-[#D3DBFF]">
      <div className="bg-white w-[90%] max-w-5xl grid grid-cols-1 md:grid-cols-2 p-6 md:p-8">
        {/* Left Section */}
        <div className="hidden md:block">
          <img
            src={LoginBg}
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-black mb-4">
            Login to your account
          </h2>
          <p className="text-sm text-black mb-8">
            Don’t have an account yet?{" "}
            <Link to="/signup" className="text-primary font-medium">
              Sign Up
            </Link>
          </p>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label className="text-sm text-black">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 mt-1 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-4 relative">
              <label className="text-sm text-black">Password</label>
              <div className="flex items-center border bg-gray-100 border-gray-300 rounded-lg mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full p-3 focus:outline-none bg-gray-100 rounded-lg"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="p-3"
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    } text-black`}
                  ></i>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center text-sm text-black">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-sm text-primary">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full p-3 text-white bg-primary rounded-lg font-medium hover:bg-primary-tint transition"
            >
              Log in
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow h-[1px] bg-gray-300"></div>
            <p className="text-sm text-gray-600 mx-3">Or continue with</p>
            <div className="flex-grow h-[1px] bg-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center gap-2 w-full max-w-[150px] py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <img src={GoogleIcon} alt="Google Icon" className="w-6 h-6" />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
