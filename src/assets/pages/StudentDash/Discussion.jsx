import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Header";
import DiscussionContentArea from "../../components/StudentDash/Discussion/DiscussionContentArea";

const Discussion = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Navbar />
        <DiscussionContentArea />
      </div>
    </div>
  );
};

export default Discussion;
