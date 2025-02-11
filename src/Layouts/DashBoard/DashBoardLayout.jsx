import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
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
} from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useUser from "../../Hooks/useUser";

const DashBoardLayout = () => {
  const { user } = useAuth();
  const email = user?.email;
  const [userData] = useUser();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto max-w-80 bg-[#FF5A5F] text-white p-5 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 z-50`}
      >
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h1 className="text-2xl font-bold ml-4 ">Dashboard</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white text-2xl focus:outline-none"
          >
            ✕
          </button>
        </div>
        <h1 className="hidden lg:block text-2xl font-bold mb-6 ">Dashboard</h1>
        <nav>
          <ul className="space-y-4">
            {userData?.role === "User" ? (
              <>
                {" "}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#333333] text-white"
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
                    to="myProfile"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
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
                    to="/dashboard/agentProfile"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
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
                    to="/dashboard/adminProfile"
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-2 rounded ${
                        isActive
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
                          ? "bg-[#333333] text-white"
                          : "hover:bg-[#4d4d4b]"
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
        className="lg:hidden fixed top-5 left-5 z-50 bg-[#FF5A5F] text-white p-2 rounded shadow-lg"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-3xl flex justify-center text-center lg:justify-start lg:text-start items-center  font-semibold mb-4">
          Welcome to the Dashboard
        </h2>
        <div className="bg-white p-4 rounded shadow">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashBoardLayout;
