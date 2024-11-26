import { useState } from "react";
import Grade11 from "./Subjects11";
import Grade12 from "./Subjects12";

const SubjectsContentArea = () => {
  const [activeTab, setActiveTab] = useState("11");

  return (
    <div className="bg-[#D3DBFF] p-6 ml-64  max-lg:ml-0 min-h-screen">
      <div className="bg-white shadow-md rounded-lg mt-16 p-6 w-full h-auto overflow-y-auto">
        {/* Tabs for toggling */}
        <div className="flex border-b max-sm:text-[14px]">
          <button
            onClick={() => setActiveTab("11")}
            className={`pb-2 px-4 ${
              activeTab === "11"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Grade 11
          </button>
          <button
            onClick={() => setActiveTab("12")}
            className={`pb-2 px-4 ${
              activeTab === "12"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Grade 12
          </button>
        </div>

        {/* Content rendering */}
        <div className="mt-4">
          {activeTab === "11" && <Grade11 />}
          {activeTab === "12" && <Grade12 />}
        </div>
      </div>
    </div>
  );
};

export default SubjectsContentArea;
