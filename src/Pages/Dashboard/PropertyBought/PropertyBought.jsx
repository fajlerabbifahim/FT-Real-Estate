import React from "react";

const PropertyBought = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Property Bought</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {properties.map((property) => ( */}
        <div
          // key={property._id}
          className="border rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src="hello"
            //   alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">property.title</h3>
            <p className="text-gray-600">property.location</p>
            <p className="mt-2 text-lg font-bold">
              Offered Amount: $property.offeredAmount
            </p>
            <p className="mt-1 text-gray-600">Agent: property.agentName</p>
            <p className="mt-2 text-green-600 font-semibold">
              Status: property.status
            </p>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default PropertyBought;
