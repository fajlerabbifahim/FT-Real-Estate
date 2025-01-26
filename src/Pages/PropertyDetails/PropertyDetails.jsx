import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { data, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Components/Loader/Loader";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../../Components/Navbar/Navbar";
import { AiOutlineHeart } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
import useWishList from "../../Hooks/useWistList";

function PropertyDetails() {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [showModal, setShowModal] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const { user } = useAuth();
  const [, , refetch] = useWishList();
  //   fetch property with id
  const { data: property, isLoading } = useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/propertyDetails/${id}`);
      return res.data;
    },
  });

  // get review
  const { data: reviews, refetch: refetchReview } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?propertyId=${id}`);
      return res.data;
    },
  });

  //wishlist

  const wistListData = {
    ...property,
    addWishList: user?.email,
  };

  delete wistListData._id; // delete wishlist data

  const handleAddToWishlist = async () => {
    try {
      const res = await axiosSecure.post("/wishlist", wistListData);
      console.log("Wishlist updated:", res.data);
      alert("added to wishlist");
      refetch();
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  // add review

  const handleAddReview = async () => {
    if (!reviewText.trim()) {
      alert("review text cannot be empty");
      return;
    }

    await axiosSecure.post("/reviews", {
      propertyTitle: property.propertyTitle,
      propertyId: id,
      text: reviewText,
      agentName: property.agentName,
      reviewerEmail: user?.email,
      reviewerImage: user?.photoURL,
      date: new Date().toDateString(),
    });
    setReviewText("");
    setShowModal(false);
    refetchReview();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Helmet>
        <title>Property Details FT Real Estate</title>
      </Helmet>
      <header>
        <Navbar />
      </header>

      <main>
        <section className="py-28 px-4 max-w-4xl mx-auto">
          {/* <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={property.propertyImage}
              alt={property.propertyTitle}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">
              {property.propertyTitle}
            </h2>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={property.agentImage}
                alt={property.agentName}
                className="w-16 h-16 object-cover rounded-full border border-gray-300"
              />
              <p className="text-gray-700 font-medium">
                Agent: {property.agentName}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <p className="text-gray-600">
                <span className="font-semibold">Size:</span>{" "}
                {property.propertySize}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Bedrooms:</span>{" "}
                {property.bedrooms}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Bathrooms:</span>{" "}
                {property.bathrooms}
              </p>
            </div>

            <p className="text-gray-600 mb-1">
              Price Range: {property.priceRange.minPrice} -{" "}
              {property.priceRange.maxPrice}
            </p>
            <p className="text-gray-600 mb-6">{property.description}</p>
            <button
              onClick={handleAddToWishlist}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Add to Wishlist
            </button>
          </div> */}

          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={property.propertyImage}
              alt={property.propertyTitle}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">
              {property.propertyTitle}
            </h2>
            <div className="flex flex-col sm:flex-row items-center space-x-4 sm:space-x-4 mb-6">
              <img
                src={property.agentImage}
                alt={property.agentName}
                className="w-16 h-16 object-cover rounded-full border border-gray-300 mb-4 sm:mb-0"
              />
              <p className="text-gray-700 font-medium">
                Agent: {property.agentName}
              </p>
            </div>
            <p className="text-gray-600 mb-1">
              Price Range: {property.priceRange.minPrice} -{" "}
              {property.priceRange.maxPrice}
            </p>
            <div className="grid grid-cols-1  my-2">
              <p className="text-gray-600">
                <span className="font-semibold">Size:</span>{" "}
                {property.propertySize}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Bedrooms:</span>{" "}
                {property.bedrooms}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Bathrooms:</span>{" "}
                {property.bathrooms}
              </p>
            </div>

            <p className="text-gray-600 mb-6">{property.description}</p>
            <button
              onClick={handleAddToWishlist}
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              <AiOutlineHeart className="mr-2" />
              Add to Wishlist
            </button>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Reviews</h3>
            {reviews?.length > 0 ? (
              <ul className="space-y-4">
                {reviews.map((review) => (
                  <li
                    key={review._id}
                    className="bg-gray-100 p-4 rounded-md shadow-md"
                  >
                    <p className="text-gray-800">{review.text}</p>
                    <p className="text-sm text-gray-500">
                      Reviewed on {review.date}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No reviews yet for this property.</p>
            )}
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
            >
              Add a Review
            </button>
          </div>

          {/* Modal for adding a review */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-md w-96">
                <h3 className="text-lg font-semibold mb-4">Add Your Review</h3>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-2 mb-4"
                  placeholder="Write your review here..."
                />
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddReview}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default PropertyDetails;
