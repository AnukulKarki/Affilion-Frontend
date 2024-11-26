import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Header";
import ClassContentArea from "../../components/StudentDash/Classes/ClassContentArea";

const Class = () => {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Navbar />
        <ClassContentArea />
      </div>
    </div>
  );
};

export default Class;
