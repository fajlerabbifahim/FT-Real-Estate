import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth"; // Assuming useAuth gives user info
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";

const MyReviews = () => {
  const { user } = useAuth(); // Get logged-in user info
  const axiosSecure = useAxiosSecure();
  // Fetch reviews for the logged-in user

  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

  // Handle delete review
  const handleDelete = async (id) => {};

  if (isLoading) return <Loader />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Reviews</h2>
      {reviews.length > 0 ? (
        <div className="grid gap-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <h3 className="text-xl font-semibold">{review.propertyTitle}</h3>
              <p className="text-gray-600">Agent: {review.agentName}</p>
              <p className="text-sm text-gray-500">
                Reviewed on: {new Date(review.reviewTime).toLocaleString()}
              </p>
              <p className="text-gray-700 mt-2">{review.description}</p>
              <button
                onClick={() => handleDelete(review._id)}
                className="mt-4 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              >
                Delete Review
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews found!</p>
      )}
    </div>
  );
};

export default MyReviews;
