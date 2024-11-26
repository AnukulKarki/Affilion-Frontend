import { useState } from "react";
import Assignments from "./Assignments";
import TeachersContent from "./TeachersContent";

const ClassContentArea = () => {
  const [activeTab, setActiveTab] = useState("assignments");
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-[#D3DBFF] p-6 ml-64 max-lg:ml-0 min-h-screen">
      <div className="bg-white shadow-md rounded-lg mt-16 p-6 w-full h-auto overflow-y-auto">
        {/* Tabs for toggling */}
        <div className="flex justify-between border-b max-sm:flex-col">
          <div className="flex max-sm:text-[14px] max-sm:border-b">
            <button
              onClick={() => setActiveTab("assignments")}
              className={`pb-2 px-4 ${
                activeTab === "assignments"
                  ? "border-b-2 border-black font-medium"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Assignments
            </button>
            <button
              onClick={() => setActiveTab("teachercontents")}
              className={`pb-2 px-4 ${
                activeTab === "teachercontents"
                  ? "border-b-2 border-black font-medium"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Teachers Content
            </button>
          </div>

          {/* Dropdown Box */}
          <div className="relative max-sm:pt-4 pb-1 ">
            <select
              value={selectedOption}
              onChange={handleDropdownChange}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="fas fa-chevron-down text-gray-700"></i>
            </div>
          </div>
        </div>

        {/* Content rendering */}
        <div className="mt-4">
          {activeTab === "assignments" && <Assignments />}
          {activeTab === "teachercontents" && <TeachersContent />}
        </div>
      </div>
    </div>
  );
};

export default ClassContentArea;
