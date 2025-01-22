import React from "react";
import useAuth from "../../../Hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-50 shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="flex flex-col items-center p-6">
        <img
          className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-md"
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          {user?.displayName || "User Name"}
        </h2>
        <p className="mt-1 text-gray-600">
          {user?.email || "user@example.com"}
        </p>
      </div>
      <div className="p-4 bg-gray-100 text-center">
        <p className="text-sm text-gray-500">
          Logged in as{" "}
          <span className="font-medium text-gray-800">
            {user?.email || "user@example.com"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
