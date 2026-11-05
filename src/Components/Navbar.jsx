import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Sun, Moon, X, Menu } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav
        className="sticky top-0 z-50 backdrop-blur-xl 
      bg-white/70 dark:bg-black/60 
      border-b border-gray-200 dark:border-gray-800 
      shadow-lg transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-black dark:text-white"
            >
              Logo
            </Link>

            {/* Desktop Nav */}
            <div
              className="hidden md:flex items-center space-x-8 
            text-gray-800 dark:text-white font-medium relative"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/faq">Faq</NavLink>
              {/* <NavLink to="/search">Search</NavLink> */}

              {/* Auth */}
              {!isAuthenticated ? (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Signup</NavLink>
                </>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setDropDownOpen(!dropDownOpen)}
                    className="flex items-center gap-2 
                    hover:text-indigo-500 dark:hover:text-indigo-400 
                    transition"
                  >
                    <User size={20} />
                    Profile
                  </button>

                  {dropDownOpen && (
                    <div
                      className="absolute right-0 mt-3 w-44 
                    bg-white dark:bg-gray-900 
                    rounded-xl shadow-2xl py-2 
                    border border-gray-200 dark:border-gray-700"
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 
                        text-gray-700 dark:text-gray-200
                        hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        My Profile
                      </Link>

                      <button
                        onClick={() => setIsAuthenticated(false)}
                        className="w-full text-left px-4 py-2 
                        text-red-500
                        hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 p-2 rounded-full 
                bg-gray-200 dark:bg-gray-800 
                text-black dark:text-white
                hover:scale-110 transition"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <button
                className=" text-gray-800 dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden px-6 pb-6 pt-2 
    flex flex-col gap-4 
    bg-white dark:bg-black/90 
    border-t border-gray-200 dark:border-gray-800
    backdrop-blur-xl animate-in slide-in-from-top duration-300"
          >
            <MobileLink to="/" setIsOpen={setIsOpen}>
              Home
            </MobileLink>

            <MobileLink to="/about" setIsOpen={setIsOpen}>
              About
            </MobileLink>

            <MobileLink to="/faq" setIsOpen={setIsOpen}>
              Faq
            </MobileLink>
            {/* 
            <MobileLink to="/search" setIsOpen={setIsOpen}>
              Search
            </MobileLink> */}

            {!isAuthenticated ? (
              <>
                <MobileLink to="/login" setIsOpen={setIsOpen}>
                  Login
                </MobileLink>

                <MobileLink to="/register" setIsOpen={setIsOpen}>
                  Signup
                </MobileLink>
              </>
            ) : (
              <>
                <MobileLink to="/profile" setIsOpen={setIsOpen}>
                  My Profile
                </MobileLink>

                <button
                  onClick={() => {
                    setIsAuthenticated(false);
                    setIsOpen(false);
                    Link("/Home");
                  }}
                  className="text-left py-2 text-red-500"
                >
                  Logout
                </button>
              </>
            )}

            {/* Mobile Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 py-2 
      text-gray-700 dark:text-gray-200"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="relative group transition duration-300 
      text-gray-700 dark:text-gray-200 
      hover:text-indigo-500 dark:hover:text-indigo-400"
    >
      {children}

      <span
        className="absolute left-0 -bottom-1 h-0.5 w-0 
        bg-indigo-500 transition-all duration-300 
        group-hover:w-full"
      ></span>
    </Link>
  );
};

const MobileLink = ({ to, children, setIsOpen }) => {
  return (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className="py-2 text-lg font-medium 
      text-gray-700 dark:text-gray-200
      hover:text-indigo-500 dark:hover:text-indigo-400
      transition duration-300"
    >
      {children}
    </Link>
  );
};

export default Navbar;
