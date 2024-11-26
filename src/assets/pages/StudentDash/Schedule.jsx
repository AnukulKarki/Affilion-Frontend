import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Header";
import ScheduleContentArea from "../../components/StudentDash/Schedule/ScheduleContentArea";

const Schedule = () => {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Navbar />
        <ScheduleContentArea />
      </div>
    </div>
  );
};

export default Schedule;
