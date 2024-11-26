import { useState } from "react";
import RescheduleModal from "./RescheduleModal";

const classData = [
  {
    subject: "Physics",
    time: "10:30 AM",
    teacher: "Ritesh Kafle",
    date: "Nov 18",
  },
  {
    subject: "Computer",
    time: "12:30 PM",
    teacher: "JJ Hirani",
    date: "Nov 18",
  },
];

const Upcoming = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden p-2">
      {classData.length === 0 ? (
        <p className="text-gray-500 text-center">No Upcoming classes</p>
      ) : (
        <>
          <div className="hidden md:grid grid-cols-5 gap-4 p-2 text-gray-700 text-sm font-medium">
            <div>Subject</div>
            <div>Time</div>
            <div>Teacher</div>
            <div>Date</div>
            <div></div>
          </div>

          {classData.map((classItem, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 mb-4 border border-gray-300 rounded-lg items-center text-sm text-black hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              <div className="font-medium">{classItem.subject}</div>
              <div className="text-gray-600">{classItem.time}</div>
              <div className="text-gray-600">{classItem.teacher}</div>
              <div className="text-gray-600">{classItem.date}</div>
              <div className="text-right">
                <button
                  className="px-4 py-2 text-sm rounded-lg transition duration-200 ease-in-out bg-[#344CC6] text-white hover:bg-[#2a3eab]"
                  onClick={() => setIsModalOpen(true)}
                >
                  Reschedule
                </button>
              </div>

              {isModalOpen && (
                <RescheduleModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Upcoming;
