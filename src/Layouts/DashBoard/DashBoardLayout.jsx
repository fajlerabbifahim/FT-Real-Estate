import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaStar,
  FaUserShield,
  FaPlusCircle,
  FaListAlt,
  FaDollarSign,
  FaEnvelope,
  FaCogs,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useUser from "../../Hooks/useUser";
import { MdDashboard } from "react-icons/md";

const DashBoardLayout = () => {
  const { user } = useAuth();
  const email = user?.email;
  const [userData] = useUser();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto max-w-80 bg-[#dce7eb] text-white p-5 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 z-50`}
      >
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h1 className="  text-[26px] font-bold ml-10 text-[#333333] ">
            FT Real Estate
          </h1>
        </div>
        <h1 className="hidden lg:block text-2xl font-bold mb-6 text-[#333333] ">
          FT Real Estate
        </h1>
        <nav>
          <ul className="space-y-4 text-[#333333]">
            {userData?.role === "User" ? (
              <>
                {" "}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]  "
                      }`
                    }
                  >
                    <FaHome size={20} />
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="home"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <MdDashboard size={20} />
                    <span>User Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="myProfile"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaUser size={20} />
                    <span>My Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/dashboard/wishlist/${email}`}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaHeart size={20} />
                    <span>Wishlist</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/dashboard/propertyBought/${email}`}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaShoppingBag size={20} />
                    <span>Property Bought</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/dashboard/reviews/${email}`}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaStar size={20} />
                    <span>My Reviews</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}

            {/* Additional agent Links */}

            {userData?.role === "Agent" ? (
              <>
                {" "}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#4d4d4b]"
                      }`
                    }
                  >
                    <FaHome size={20} />
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/home"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <MdDashboard size={20} />
                    <span>Agent Home </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/agentProfile"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaUserShield size={20} />
                    <span>Agent Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addProperty"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaPlusCircle size={20} />
                    <span>Add Property</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/dashboard/myAddedProperty/${email}`}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaListAlt size={20} />
                    <span>My Added Properties</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/mySoldProperty"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaDollarSign size={20} />
                    <span>My Sold Properties</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/requestedProperty"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaEnvelope size={20} />
                    <span>Requested Properties</span>
                  </NavLink>
                </li>{" "}
              </>
            ) : (
              <></>
            )}

            {/* admin additional links  */}

            {userData?.role === "Admin" ? (
              <>
                {" "}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaHome size={20} />
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/home"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <MdDashboard size={20} />
                    <span>Dashboard Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/adminProfile"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaUserShield size={20} />
                    <span>Admin Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allProperties"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaCogs size={20} />
                    <span>Manage Properties</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/users"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaUsers size={20} />
                    <span>Manage Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageReview"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#FF5A5F] text-white"
                          : "hover:bg-[#c2d5da]"
                      }`
                    }
                  >
                    <FaStar size={20} />
                    <span>Manage Reviews</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </nav>
      </aside>

      {/* Hamburger Button for Mobile */}
      <button
        className="lg:hidden fixed top-5 left-5 z-50 bg-[#333333] text-white p-2 rounded shadow-lg"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold text-start">
            Welcome to the Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-start">
              <span className="font-bold text-xl">{userData?.name}</span>
              <span className="font-medium text-gray-600 flex justify-end">
                {userData?.role}
              </span>
            </div>

            <div className="relative group">
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  className="w-10 h-10 text-gray-700 rounded-full "
                  src={userData?.photo || "https://via.placeholder.com/150"}
                  alt="User Profile"
                />
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <ul className="py-2 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/dashboard/myProfile">Profile</Link>
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashBoardLayout;
