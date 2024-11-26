import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import MenuIcon from "../images/hamburger.png";
import CloseIcon from "../images/close.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full fixed top-0 bg-white z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-8">
            <NavLink to="/">
              <img src={Logo} alt="Logo" className="w-auto h-8" />
            </NavLink>

            {/* Desktop Menu Links */}
            <div className="hidden md:flex space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                }
              >
                Blogs
              </NavLink>
            </div>
          </div>

          {/* Right Buttons (Log in / Sign Up) */}
          <div className="hidden md:flex items-center space-x-12">
            <NavLink to="/login">
              <button className="text-gray-600 hover:text-primary">
                Log in
              </button>
            </NavLink>

            <NavLink to="/signup">
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="p-2" onClick={toggleMenu}>
            {isOpen ? (
              <img src={CloseIcon} alt="close icon" className="w-8 h-8" />
            ) : (
              <img src={MenuIcon} alt="menu icon" className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg p-4`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block text-primary py-2"
                : "block text-gray-600 hover:text-primary py-2"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block text-primary py-2"
                : "block text-gray-600 hover:text-primary py-2"
            }
            onClick={closeMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "block text-primary py-2"
                : "block text-gray-600 hover:text-primary py-2"
            }
            onClick={closeMenu}
          >
            Blogs
          </NavLink>

          <NavLink to="/login" onClick={closeMenu}>
            <button className="block text-gray-600 hover:text-primary py-2">
              Log in
            </button>
          </NavLink>

          <NavLink to="/signup" onClick={closeMenu}>
            <button className="block w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 mt-2">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
