import React from "react";

const WishList = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
      <div className="grid gap-6">
        <div className="bg-white shadow-md rounded-md p-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="" className="w-24 h-24 object-cover rounded-md" />
            <div>
              <h2 className="text-lg font-semibold">property.propertyTitle</h2>
              <p className="text-gray-600">
                Location: property.propertyLocation
              </p>
              <p className="text-gray-600">
                Price: property.priceRange.minPrice -
                property.priceRange.maxPrice
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <img src="" className="w-8 h-8 object-cover rounded-full" />
                <p>property.agentName</p>
                property.verificationStatus &&
                <span className="text-green-600 text-sm">Verified</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
              Make an Offer
            </button>
            <button className="bg-red-600 text-white py-2 px-4 rounded-md">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
