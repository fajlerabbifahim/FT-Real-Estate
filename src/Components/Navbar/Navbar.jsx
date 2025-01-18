import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  // Dynamic Links as JSX Variable
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#FFC947] font-semibold"
            : "hover:text-gray-300 transition duration-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-[#FFC947] font-semibold"
            : "hover:text-gray-300 transition duration-300"
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[#FFC947] font-semibold"
            : "hover:text-gray-300 transition duration-300"
        }
      >
        About
      </NavLink>
    </>
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-[#00509E] text-white fixed top-0 left-0 z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">FT Real Estate</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {links}
          {user?.email ? (
            <button className="px-4 py-2 bg-[#D72638] text-[#FFFFFF] rounded transition duration-300 hover:bg-[#FF5E5E]">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 bg-[#FFC947] text-[#FFFFFF] rounded transition duration-300 hover:bg-[#FFD365]">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#00509E] absolute top-16 left-0 w-full transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          {links}

          {user?.email ? (
            <button className="px-4 py-2 bg-[#D72638] text-[#FFFFFF] rounded transition duration-300 hover:bg-[#FF5E5E]">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 bg-[#FFC947] text-[#FFFFFF] rounded transition duration-300 hover:bg-[#FFD365]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
