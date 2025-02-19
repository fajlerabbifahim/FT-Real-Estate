import React from "react";

const UserHome = () => {
  return (
    <div>
      {/* User Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Wishlist</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Comments</h3>
          <p className="text-2xl font-bold">34</p>
        </div>
        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Properties Bought</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold">Reviews</h3>
          <p className="text-2xl font-bold">20</p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
