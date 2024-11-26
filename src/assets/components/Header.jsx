import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleSearchOverlay = () => {
    setIsSearchOverlayOpen(!isSearchOverlayOpen);
  };

  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target)
    ) {
      setIsProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white flex items-center justify-between px-6 py-4 border-b border-gray-300 fixed top-0 lg:left-64 lg:w-[calc(100%-16rem)] w-full z-10">
      {/* Search Bar / Icon */}
      <div className="flex items-center gap-4 w-[40%] lg:pl-0 pl-14">
        <input
          type="text"
          placeholder="Search subjects..."
          className="hidden lg:flex flex-grow px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344CC6]"
        />
      </div>

      {/* Profile and Notifications */}
      <div className="flex items-center gap-4 lg:pr-16">
        <button className="lg:hidden pr-4" onClick={toggleSearchOverlay}>
          <i className="fas fa-search text-xl"></i>
        </button>
        <div className="relative lg:hidden" ref={profileMenuRef}>
          <div
            className="w-8 h-8 bg-[#F56A6A] rounded-lg flex items-center justify-center text-white cursor-pointer"
            onClick={toggleProfileMenu}
          >
            J
          </div>

          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  window.location.href = "/profile";
                }}
              >
                <i className="fas fa-user mr-2"></i> Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <i className="fas fa-bell mr-2"></i> Notifications
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <i className="fas fa-question-circle mr-2"></i> Help
              </button>
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="py-1 px-2 border border-gray-200 rounded-lg">
            <i className="fas fa-question-circle"></i>
          </button>
          <button className="py-1 px-2 border border-gray-200 rounded-lg">
            <i className="fas fa-bell"></i>
          </button>

          <div className="w-[1px] h-6 bg-gray-300"></div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              window.location.href = "/profile";
            }}
          >
            <div className="w-8 h-8 bg-[#F56A6A] rounded-lg flex items-center justify-center text-white">
              J
            </div>
            <div className="text-sm">
              <p className="font-medium">John Doe</p>
              <p className="text-gray-500">Student</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-start justify-center">
          <div className="bg-white mt-1 p-2 fixed top-16 rounded-lg shadow-lg w-11/12 max-w-md">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search subjects..."
                className="flex-grow px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344CC6]"
              />
              <button
                className="ml-2 text-gray-500 hover:text-gray-700"
                onClick={toggleSearchOverlay}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
