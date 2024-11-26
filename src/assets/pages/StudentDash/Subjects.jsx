import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Header";
import SubjectsContentArea from "../../components/StudentDash/Subjects/SubjectsContentArea";

const Subjects = () => {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Navbar />
        <SubjectsContentArea />
      </div>
    </div>
  );
};

export default Subjects;
