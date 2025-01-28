import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaRegHeart, FaTimes } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useWistList from "../../Hooks/useWistList";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [wishlist, isError, refetch] = useWistList();
  console.log("wishlist navbar data", wishlist);

  if (isError) {
    return <Loader />;
  }

  // nav links here
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#FF5A5F] font-semibold"
            : "hover:text-gray-300 transition duration-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allProperties"
        className={({ isActive }) =>
          isActive
            ? "text-[#FF5A5F] font-semibold"
            : "hover:text-gray-300 transition duration-300"
        }
      >
        All Properties
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
            ? "text-[#FF5A5F] font-semibold"
            : "hover:text-gray-300 transition duration-300"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/dashboard/myProfile"
        className={({ isActive }) =>
          isActive
            ? "text-[#FF5A5F] font-semibold"
            : "hover:text-gray-300 transition duration-300"
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full backdrop-blur-lg text-gray-600 fixed top-0 left-0 z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-[#FF5A5F]">
          <div className="text-2xl font-bold">FT Real Estate</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {links}
          {/* wish list button  */}
          <div className="relative inline-block">
            {/* Heart Icon */}
            <p className="text-xl text-[#FF5A5F]">
              <FaRegHeart />
            </p>
            {/* Static Count Badge */}
            <span className="absolute -top-2 -right-2 bg-[#FF5A5F] text-white text-xs font-bold rounded-full px-2">
              {wishlist?.length}
            </span>
          </div>
          {user?.email ? (
            <button
              onClick={() => logOut()}
              className="px-4 py-2 bg-[#D72638] text-[#FFFFFF] rounded transition duration-300 hover:bg-[#FF5E5E]"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 bg-[#FF5E5E] text-[#FFFFFF] rounded transition duration-300 hover:bg-[#f07272]">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}

        <div className="md:hidden flex items-center gap-5 ">
          {/* wish list button  */}
          <div className="relative inline-block">
            {/* Heart Icon */}
            <p className="text-xl text-red-500">
              <FaRegHeart />
            </p>
            {/* Static Count Badge */}
            <span className="absolute -top-2 -right-2 bg-[#FF5A5F] text-white text-xs font-bold rounded-full px-2">
              {wishlist?.length}
            </span>
          </div>
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden backdrop-blur-lg text-gray-600 absolute top-16 left-0 w-full transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          {links}

          {user?.email ? (
            <button
              onClick={() => logOut()}
              className="px-4 py-2 bg-[#D72638] text-[#FFFFFF] rounded transition duration-300 hover:bg-[#FF5E5E]"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 bg-[#FF5E5E] text-[#FFFFFF] rounded transition duration-300  hover:bg-[#f07272]">
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
