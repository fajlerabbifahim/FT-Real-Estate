import React from "react";
import useProperties from "../../../Hooks/useProperties";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import Loader from "../../../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

function PropertieSection() {
  const [data, , isLoading] = useProperties();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <SectionTitle
        title={"Properties For Rent"}
        subTitle={
          "Search over 2000 properties to rent from the top agents in the country"
        }
      />
      <div className=" px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Our Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((property) => (
            <div
              key={property._id}
              className="bg-white shadow-md rounded-lg overflow-hidden border"
            >
              {/* Property Image */}
              <img
                src={property.propertyImage}
                alt="Property"
                className="w-full h-40 object-cover"
              />
              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-1">
                  <IoLocationSharp />
                  {property.propertyLocation}
                </h3>

                <p className="text-gray-600 mb-1">
                  Price Range: {property.priceRange.minPrice} -{" "}
                  {property.priceRange.maxPrice}
                </p>

                <p
                  className={`mb-3 text-sm font-medium ${
                    property.verificationStatus === "verified"
                      ? "text-green-600"
                      : property.verificationStatus === "pending"
                      ? "text-yellow-500"
                      : "text-red-600"
                  }`}
                >
                  Status: {property.verificationStatus}
                </p>

                <Link to={`/propertyDetails/${property._id}`}>
                  <button className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertieSection;
