import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";

const DashBoardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-64 bg-blue-600 text-white p-5 transform ${
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
            <li>
              <Link
                to="/"
                className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-500"
              >
                <FaHome size={20} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="myProfile"
                className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-500"
              >
                <FaUser size={20} />
                <span>My Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-500"
              >
                <FaHeart size={20} />
                <span>Wishlist</span>
              </Link>
            </li>
            <li>
              <Link
                to="/property-bought"
                className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-500"
              >
                <FaShoppingBag size={20} />
                <span>Property Bought</span>
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-500"
              >
                <FaStar size={20} />
                <span>My Reviews</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Hamburger Button for Mobile */}
      <button
        className="lg:hidden fixed top-5 left-5 z-50 bg-blue-600 text-white p-2 rounded shadow-lg"
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
