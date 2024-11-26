import { useState } from "react";
import General from "./GeneralInfo";
import Password from "./ChangePassword";

const ProfileContentArea = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="bg-[#D3DBFF] p-6 ml-64 max-lg:ml-0 min-h-screen">
      <div className="bg-white shadow-md rounded-lg mt-16 p-6 w-full h-auto overflow-y-auto">
        {/* Tabs for toggling */}
        <div className="flex border-b max-sm:text-[14px]">
          <button
            onClick={() => setActiveTab("general")}
            className={`pb-2 px-4 ${
              activeTab === "general"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`pb-2 px-4 ${
              activeTab === "password"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Change Password
          </button>
        </div>

        {/* Content rendering */}
        <div className="mt-4">
          {activeTab === "general" && <General />}
          {activeTab === "password" && <Password />}
        </div>
      </div>
    </div>
  );
};

export default ProfileContentArea;
