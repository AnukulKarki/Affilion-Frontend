import { useState } from "react";
import Logo from "../../assets/images/logo-white.png";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility
  const location = useLocation();

  const navItems = [
    { icon: "fas fa-home", label: "Dashboard", path: "/dashboard" },
    { icon: "fas fa-book", label: "Subjects", path: "/subjects" },
    { icon: "fas fa-pen", label: "Classes", path: "/class" },
    { icon: "fas fa-calendar", label: "Schedule", path: "/schedule" },
    { icon: "fas fa-comments", label: "Discussion", path: "/discussion" },
  ];

  return (
    <>
      {/* Hamburger Menu for Small Screens */}
      <button
        className="lg:hidden fixed top-4 left-8 z-20 text-primary text-2xl"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-[#202D71] text-white w-64 h-full flex flex-col p-4 fixed top-0 z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="w-auto h-8" />
          </NavLink>
          <div className="w-full h-[1px] bg-white mt-6"></div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={`flex items-center gap-4 py-3 px-6 rounded-lg ${
                  location.pathname === item.path
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                }`}
                onClick={() => setIsSidebarOpen(false)} // Close sidebar after navigating on small screens
              >
                <i className={`${item.icon} text-lg`}></i>
                <span className="text-base">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <button
          className="mt-auto flex items-center gap-4 py-2 px-6 rounded-lg hover:bg-white hover:text-black"
          onClick={() => console.log("Logout")}
        >
          <i className="fas fa-arrow-right-from-bracket"></i>
          <span>Log Out</span>
        </button>
      </aside>

      {/* Overlay for small screens (appears when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicking outside
        ></div>
      )}
    </>
  );
};

export default Sidebar;
