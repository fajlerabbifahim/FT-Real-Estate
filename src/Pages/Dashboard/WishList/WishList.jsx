import React from "react";
import useWishList from "../../../Hooks/useWistList";
import Loader from "../../../Components/Loader/Loader";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const WishList = () => {
  const [wishlist, isLoading, refetch] = useWishList();
  const axiosSecure = useAxiosSecure();

  if (isLoading) {
    return <Loader />;
  }
  //   wishlist delete button
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete clicked", id);

        axiosSecure.delete(`/wishlist/${id}`).then((res) => {
          console.log("delete response", res.data);
          refetch();

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
      <div className="grid gap-6">
        {wishlist.map((property) => (
          <div
            key={property._id}
            className="bg-white shadow-md rounded-md p-4 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                src={property.propertyImage}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {property.propertyTitle}
                </h2>
                <p className="text-gray-600">
                  Location:{property.propertyLocation}
                </p>
                <p className="text-gray-600">
                  Price: {property.priceRange.minPrice} -
                  {property.priceRange.maxPrice}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <img
                    src={property.agentImage}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <p>{property.agentName}</p>
                  {property.verificationStatus && (
                    <span className="text-green-600 text-sm">Verified</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to={`/dashboard/makeOffer/${property._id}`}>
                <button className="bg-[#FF5A5F] text-white py-2 px-4 rounded-md">
                  Make an Offer
                </button>
              </Link>
              <button
                onClick={() => {
                  handleDelete(property._id);
                }}
                className="bg-red-600 text-white py-2 px-4 rounded-md flex items-center gap-2 "
              >
                <FaTrash />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
