import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./assets/pages/LandingPage";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import AboutUs from "./assets/pages/AboutUs";
import Blogs from "./assets/pages/Blogs";
import BlogsContent from "./assets/pages/BlogContent";
import NotFound from "./assets/pages/404";
import Dashboard from "./assets/pages/StudentDash/Dashboard";
import Subjects from "./assets/pages/StudentDash/Subjects";
import Class from "./assets/pages/StudentDash/Class";
import Schedule from "./assets/pages/StudentDash/Schedule";
import Discussion from "./assets/pages/StudentDash/Discussion";
import Profile from "./assets/pages/StudentDash/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogsContent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/class" element={<Class />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
