import { useState } from "react";
import { FaCheck, FaTimes, FaEllipsisV } from "react-icons/fa";
import Loader from "../../../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageProperty = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: properties,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allProperties");
      return res.data;
    },
  });

  const handleStatus = (id, verificationStatus) => {
    axiosSecure.put(`/property/${id}`, { verificationStatus }).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Property ${verificationStatus}`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });

    console.log("property address", id, verificationStatus);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-5 max-w-full overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left border-b">Property Title</th>
            <th className="px-4 py-3 text-left border-b">Location</th>
            <th className="px-4 py-3 text-left border-b">Agent Name</th>
            <th className="px-4 py-3 text-left border-b">Agent Email</th>
            <th className="px-4 py-3 text-left border-b">Price Range</th>
            <th className="px-4 py-3 text-left border-b">Status</th>
            <th className="px-4 py-3 text-left border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id} className="hover:bg-gray-50">
              <td className="px-4 py-3 border-b">{property.propertyTitle}</td>
              <td className="px-4 py-3 border-b">
                {property.propertyLocation}
              </td>
              <td className="px-4 py-3 border-b">{property.agentName}</td>
              <td className="px-4 py-3 border-b">{property.agentEmail}</td>
              <td className="px-4 py-3 border-b">
                {property.priceRange.minPrice} - {property.priceRange.maxPrice}
              </td>
              <td className="px-4 py-3 border-b text-yellow-500">
                {property.verificationStatus}
              </td>
              <td className="px-4 py-3 border-b">
                <div className="dropdown dropdown-hover">
                  <label
                    tabIndex={0}
                    className="btn btn-xs btn-info flex items-center gap-1"
                  >
                    <FaEllipsisV />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44"
                  >
                    <li>
                      <button
                        onClick={() => handleStatus(property._id, "verified")}
                        className="text-green-500 hover:bg-green-100 px-4 py-2 rounded"
                      >
                        <FaCheck className="inline mr-2" />
                        Verify
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleStatus(property._id, "reject")}
                        className="text-red-500 hover:bg-red-100 px-4 py-2 rounded"
                      >
                        <FaTimes className="inline mr-2" />
                        Reject
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProperty;
