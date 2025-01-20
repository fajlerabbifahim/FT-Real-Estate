import React from "react";
import useProperties from "../../Hooks/useProperties";
import Loader from "../../Components/Loader/Loader";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Navbar from "../../Components/Navbar/Navbar";

function AllProperties() {
  const [data, , isLoading] = useProperties();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className=" mt-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title={"All Properties"}
            subTitle={"Find Your Dream House"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((property) => (
              <div
                key={property._id}
                className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={property.propertyImage}
                  alt={property.propertyTitle}
                  className="w-full h-40 object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {property.propertyTitle}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    📍 {property.propertyLocation}
                  </p>
                  <div className="flex items-center mb-2">
                    <img
                      src={property.agentImage}
                      alt={property.agentName}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <p className="text-sm font-medium">{property.agentName}</p>
                  </div>
                  <p
                    className={`text-sm font-medium mb-2 ${
                      property.verificationStatus === "verified"
                        ? "text-green-600"
                        : property.verificationStatus === "pending"
                        ? "text-yellow-500"
                        : "text-red-600"
                    }`}
                  >
                    Status: {property.verificationStatus}
                  </p>
                  <p className="text-gray-600 mb-1">
                    Price Range: {property.priceRange.minPrice} -{" "}
                    {property.priceRange.maxPrice}
                  </p>
                  <button className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default AllProperties;
