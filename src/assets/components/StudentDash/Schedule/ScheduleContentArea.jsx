import { useState } from "react";
import Routine from "./Routine";
import Ongoing from "./Ongoing";
import Upcoming from "./Upcoming";

const ScheduleContentArea = () => {
  const [activeTab, setActiveTab] = useState("routine");

  return (
    <div className="bg-[#D3DBFF] p-6 ml-64 max-lg:ml-0 min-h-screen">
      <div className="bg-white shadow-md rounded-lg mt-16 p-6 w-full h-auto overflow-y-auto">
        {/* Tabs for toggling */}
        <div className="flex border-b max-sm:text-[14px]">
          <button
            onClick={() => setActiveTab("routine")}
            className={`pb-2 px-3 ${
              activeTab === "routine"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Routine
          </button>
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`pb-2 px-3 ${
              activeTab === "ongoing"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Ongoing Class
          </button>
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`pb-2 px-3 ${
              activeTab === "upcoming"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Upcoming Class
          </button>
        </div>

        {/* Content rendering */}
        <div className="mt-4">
          {activeTab === "routine" && <Routine />}
          {activeTab === "ongoing" && <Ongoing />}
          {activeTab === "upcoming" && <Upcoming />}
        </div>
      </div>
    </div>
  );
};

export default ScheduleContentArea;
