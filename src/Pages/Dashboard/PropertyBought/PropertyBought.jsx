import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";

const PropertyBought = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  //make offer data
  const { data: properties, isLoading } = useQuery({
    queryKey: ["property"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/propertyBought/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Property Bought</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property._id}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={property.propertyImage}
              alt={property.propertyTitle}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {property.propertyTitle}
              </h3>
              <p className="text-gray-600">{property.propertyLocation}</p>
              <p className="mt-2 text-lg font-bold">
                Offered Amount: {property.offerAmount}
              </p>
              <p className="mt-1 text-gray-600">Agent: {property.agentName}</p>
              <p className="mt-2 text-green-600 font-semibold">
                Status: {property.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyBought;
