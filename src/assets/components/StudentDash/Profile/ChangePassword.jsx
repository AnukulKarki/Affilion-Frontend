import { useState } from "react";

const Password = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 p-6 max-w-4xl">
      {/* Form Section */}
      <form className=" w-full md:w-1/2 space-y-4">
        {/* Current Password */}
        <div>
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Current Password
          </label>

          <div className="flex items-center border border-gray-300 rounded-lg mt-1">
            <input
              htmlFor="currentPassword"
              type={showCurrentPassword ? "text" : "password"}
              className="w-full p-3 focus:outline-none  rounded-lg"
            />
            <button
              type="button"
              onClick={toggleCurrentPasswordVisibility}
              className="p-3"
            >
              <i
                className={`fas ${
                  showCurrentPassword ? "fa-eye-slash" : "fa-eye"
                } text-black`}
              ></i>
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Password
          </label>

          <div className="flex items-center border border-gray-300 rounded-lg mt-1">
            <input
              htmlFor="newPassword"
              type={showPassword ? "text" : "password"}
              className="w-full p-3 focus:outline-none  rounded-lg"
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

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>

          <div className="flex items-center border border-gray-300 rounded-lg mt-1">
            <input
              htmlFor="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              className="w-full p-3 focus:outline-none  rounded-lg"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="p-3"
            >
              <i
                className={`fas ${
                  showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                } text-black`}
              ></i>
            </button>
          </div>
        </div>

        {/* Save Password Button */}
        <button
          type="submit"
          className="bg-[#344CC6] text-white w-full py-2 px-6 rounded-md text-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Save Password
        </button>
      </form>

      {/* Avatar Section */}
      <div className="relative w-32 h-32">
        {/* Avatar Placeholder */}
        <div className="w-full h-full bg-red-400 rounded-full"></div>

        {/* Camera Icon */}
        <label
          htmlFor="avatarUpload"
          className="absolute bottom-2 right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <i className="fas fa-camera"></i>
          <input id="avatarUpload" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default Password;
