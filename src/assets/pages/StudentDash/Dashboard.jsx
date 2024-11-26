import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Header";
import DashContentArea from "../../components/StudentDash/Dashboard/DashContentArea";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Navbar />
        <DashContentArea />
      </div>
    </div>
  );
};

export default Dashboard;
