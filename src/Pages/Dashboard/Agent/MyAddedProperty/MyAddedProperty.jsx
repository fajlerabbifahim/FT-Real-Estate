import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loader from "../../../../Components/Loader/Loader";
const MyAddedProperty = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: properties,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["property", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myAddedProperty/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div className="p-5">
      {/* Property Row */}

      {properties.map((property) => (
        <div
          key={property._id}
          className="flex items-center justify-between border rounded-lg shadow-md p-4 bg-white mb-4"
        >
          {/* Left Side: Image */}
          <img
            src={property.propertyImage}
            alt="Modern Duplex Apartment"
            className="w-24 h-24 object-cover rounded-lg"
          />

          {/* Right Side: Details */}
          <div className="flex-1 ml-4">
            <h3 className="text-lg font-bold text-gray-800">
              Modern Duplex Apartment
            </h3>
            <p className="text-sm text-gray-500">{property.propertyLocation}</p>
            <p className="text-indigo-600 mb-1">
              Price Range: {property.priceRange.minPrice} -{" "}
              {property.priceRange.maxPrice}
            </p>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                property.verificationStatus === "verified"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {property.verificationStatus === "verified"
                ? "Verified"
                : "Pending"}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2">
            <button className="flex items-center space-x-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <FaEdit />
              <span>Update</span>
            </button>
            <button className="flex items-center space-x-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              <FaTrash />
              <span>Delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAddedProperty;
