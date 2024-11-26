import { useState } from "react";
import SubmitAssignment from "./SubmitAssignment";

const assignmentData = [
  {
    title: "Exploring Laws of Motion",
    assignedDate: "Nov 18",
    submissionDate: "Nov 25",
    teacher: "Ritesh Kafle",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos dicta earum quod praesentium, necessitatibus repellat dolorum reprehenderit laudantium recusandae in! Quibusdam consequuntur nihil sapiente veritatis voluptate ad, facilis nesciunt!",
  },
  {
    title: "Assignment 2",
    assignedDate: "Nov 20",
    submissionDate: "Nov 27",
    teacher: "JJ Hirani",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos dicta earum quod praesentium, necessitatibus repellat dolorum reprehenderit laudantium recusandae in! Quibusdam consequuntur nihil sapiente veritatis voluptate ad, facilis nesciunt!",
  },
];

const Assignments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      {assignmentData.length === 0 ? (
        <p className="text-gray-500 text-center">No Assignments</p>
      ) : (
        <>
          {assignmentData.map((assignment, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 mb-4 hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              <div className="flex justify-between items-start flex-wrap md:flex-nowrap">
                <div className="flex-grow">
                  <div className="text-2xl font-bold">{assignment.title}</div>
                  <div className="flex flex-wrap justify-between max-md:gap-2 py-2 md:max-w-3xl">
                    <div className="text-gray-600">
                      Assigned Date:
                      <span className="pl-2">{assignment.assignedDate}</span>
                    </div>
                    <div className="text-gray-600">
                      Submission Date:
                      <span className="pl-2">{assignment.submissionDate}</span>
                    </div>
                    <div className="text-gray-600">
                      Teacher:
                      <span className="pl-2">{assignment.teacher}</span>
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <span>{assignment.desc}</span>
                  </div>

                  <div className="py-3">
                    <button className="px-4 py-2 text-sm rounded-lg transition duration-200 ease-in-out bg-gray-200 text-gray-500">
                      <i className="fas fa-paperclip"></i>&nbsp;
                      {assignment.title}
                    </button>
                    <button className="max-sm:mt-2 ml-2 px-4 py-2 text-sm rounded-lg transition duration-200 ease-in-out bg-gray-200 text-gray-500">
                      <i className="fas fa-download"></i>
                    </button>
                  </div>
                </div>
                <button
                  className="px-4 py-2 text-sm rounded-lg transition duration-200 ease-in-out bg-[#344CC6] text-white hover:bg-[#2a3eab] md:ml-4 mb-2 md:mb-0"
                  onClick={() => setIsModalOpen(true)}
                >
                  Submit
                </button>
              </div>

              {isModalOpen && (
                <SubmitAssignment
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

export default Assignments;
