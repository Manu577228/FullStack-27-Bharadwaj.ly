import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/contextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { token, setToken } = useStoreContext();

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <div className="h-16 z-50 sticky top-0 backdrop-blur-md bg-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 h-full flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Bharadwaj Logo"
            className="h-12 w-auto object-contain hover:opacity-70 transition"
          />
        </Link>

        {/* Menu */}
        <ul
          className={`flex sm:gap-8 gap-4 sm:items-center text-sm
          sm:static absolute left-0 top-16 sm:shadow-none shadow-md
          ${navbarOpen ? "h-fit py-6" : "h-0 overflow-hidden"}
          transition-all duration-300
          sm:h-fit sm:bg-transparent bg-white/80 backdrop-blur-md
          sm:w-fit w-full sm:flex-row flex-col px-6 sm:px-0`}
        >

          <li>
            <Link
              className={`transition duration-200 ${
                path === "/"
                  ? "text-black font-semibold"
                  : "text-gray-700 hover:text-black"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={`transition duration-200 ${
                path === "/about"
                  ? "text-black font-semibold"
                  : "text-gray-700 hover:text-black"
              }`}
              to="/about"
            >
              About
            </Link>
          </li>

          {token && (
            <li>
              <Link
                className={`transition duration-200 ${
                  path === "/dashboard"
                    ? "text-black font-semibold"
                    : "text-gray-700 hover:text-black"
                }`}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

          {/* Sign Up - Outline Red */}
          {!token && (
            <li>
              <Link
                to="/register"
                className="border border-red-500 text-red-500 
                px-5 py-2 rounded-lg font-medium 
                hover:bg-red-500 hover:text-white 
                transition-all duration-300"
              >
                Sign Up
              </Link>
            </li>
          )}

          {/* Logout - Solid Red */}
          {token && (
            <li>
              <button
                onClick={onLogOutHandler}
                className="bg-red-500 hover:bg-red-600 
                text-white px-5 py-2 rounded-lg 
                font-medium transition-all duration-300 
                shadow-sm hover:shadow-md"
              >
                Log Out
              </button>
            </li>
          )}

        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden text-black"
        >
          {navbarOpen ? (
            <RxCross2 className="text-3xl" />
          ) : (
            <IoIosMenu className="text-3xl" />
          )}
        </button>

      </div>
    </div>
  );
};

export default Navbar;