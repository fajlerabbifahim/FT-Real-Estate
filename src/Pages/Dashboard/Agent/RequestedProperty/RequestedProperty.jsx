import React from "react";
import { FaCheck, FaTimes, FaEllipsisV } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const RequestedProperty = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: properties,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["property"],
    queryFn: async () => {
      const res = await axiosSecure.get("requestedProperty");
      return res.data;
    },
  });

  const handleOffered = (id, status, propertyTitle) => {
    axiosSecure
      .put(`/requestedProperty/${id}`, { status, propertyTitle })
      .then((res) => {
        console.log("offered status change res", res.data);
        refetch();
      });
    console.log("Offer Accepted", id, status, propertyTitle);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="p-5">
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Property Title</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Buyer Email</th>
              <th className="px-4 py-2">Buyer Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Offered Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row 1 */}
            {properties.map((property) => (
              <tr key={property._id}>
                <td className="px-4 py-2">{property.propertyTitle}</td>
                <td className="px-4 py-2">{property.propertyLocation}</td>
                <td className="px-4 py-2">{property.buyerEmail}</td>
                <td className="px-4 py-2">{property.buyerName}</td>
                <td className="px-4 py-2">{property.status}</td>
                <td className="px-4 py-2">${property.offerAmount}</td>
                <td className="px-4 py-2">
                  <div className="dropdown dropdown-left dropdown-hover">
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
                          onClick={() =>
                            handleOffered(
                              property._id,
                              "accept",
                              property.propertyTitle
                            )
                          }
                          className="flex items-center"
                        >
                          <FaCheck className="mr-2 text-green-600" /> Accept
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            handleOffered(
                              property._id,
                              "reject",
                              property.propertyTitle
                            )
                          }
                          className="flex items-center"
                        >
                          <FaTimes className="mr-2 text-red-600" /> Reject
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
    </div>
  );
};

export default RequestedProperty;
