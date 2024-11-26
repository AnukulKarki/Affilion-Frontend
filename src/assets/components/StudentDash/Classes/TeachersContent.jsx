const contentData = [
  {
    title: "Week 1 Lecture",
    uploadedDate: "Nov 18",
    teacher: "Ritesh Kafle",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    title: "Notes Chapter 2",
    uploadedDate: "Nov 20",
    teacher: "JJ Hirani",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

const TeachersContent = () => {
  return (
    <div className="w-full overflow-hidden">
      {contentData.length === 0 ? (
        <p className="text-gray-500 text-center">No Content</p>
      ) : (
        <>
          {contentData.map((assignment, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 mb-4 hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-2xl font-bold">{assignment.title}</div>
                <button className="px-4 py-2 text-sm rounded-lg transition duration-200 ease-in-out bg-[#344CC6] text-white hover:bg-[#2a3eab]">
                  Download
                  <i className="fas fa-download ml-2"></i>
                </button>
              </div>

              <div className="flex flex-wrap justify-between mb-2 max-md:gap-2, py-2">
                <div className="text-gray-600">
                  Uploaded Date:
                  <span className="pl-2">{assignment.uploadedDate}</span>
                </div>
                <div className="text-gray-600">
                  Teacher:
                  <span className="pl-2">{assignment.teacher}</span>
                </div>
              </div>
              <div className="text-gray-600">
                <span>{assignment.desc}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TeachersContent;
