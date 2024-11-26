import { useState } from "react";
import Class from "./DashClass";
import Notice from "./DashNotice";

const DashContentArea = () => {
  const [activeTab, setActiveTab] = useState("notice");

  return (
    <div className="bg-[#D3DBFF] p-6 ml-64 max-lg:ml-0 min-h-screen">
      <div className="bg-white shadow-md rounded-lg mt-16 p-6 w-full h-auto overflow-y-auto">
        {/* Tabs for toggling */}
        <div className="flex border-b max-sm:text-[14px]">
          <button
            onClick={() => setActiveTab("notice")}
            className={`pb-2 px-4 ${
              activeTab === "notice"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Notice Board
          </button>
          <button
            onClick={() => setActiveTab("classes")}
            className={`pb-2 px-4 ${
              activeTab === "classes"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Today&apos;s Classes
          </button>
        </div>

        {/* Content rendering */}
        <div className="mt-4">
          {activeTab === "notice" && <Notice />}
          {activeTab === "classes" && <Class />}
        </div>
      </div>
    </div>
  );
};

export default DashContentArea;
