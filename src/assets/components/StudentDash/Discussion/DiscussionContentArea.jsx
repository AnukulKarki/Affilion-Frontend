import { useState } from "react";
import Chat from "./Chat";
import Discussion from "./Discussion";

const DiscussionContentArea = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="bg-[#D3DBFF] p-6 ml-64  max-lg:ml-0 min-h-screen">
      <div className="bg-white shadow-md rounded-lg mt-16 p-6 w-full h-auto overflow-y-auto">
        {/* Tabs for toggling */}
        <div className="flex border-b max-sm:text-[14px]">
          <button
            onClick={() => setActiveTab("chat")}
            className={`pb-2 px-4 ${
              activeTab === "chat"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Chat
          </button>
          <button
            onClick={() => setActiveTab("discussion")}
            className={`pb-2 px-4 ${
              activeTab === "discussion"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Discussion
          </button>
        </div>

        {/* Content rendering */}
        <div className="mt-4">
          {activeTab === "chat" && <Chat />}
          {activeTab === "discussion" && <Discussion />}
        </div>
      </div>
    </div>
  );
};

export default DiscussionContentArea;
