import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
const ManageReview = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: reviews,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allReviews");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    axiosSecure.delete(`/reviews/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
    console.log("Delete button clicked!");
  };

  if (isLoading) return <Loader />;
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Users Reviews</h2>
      <div className="grid gap-4">
        {/* Review Card 1 */}

        {reviews.map((review) => (
          <div className="bg-white shadow-md border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold"> {review.propertyTitle} </h3>
            <p className="text-sm text-gray-600">Agent: {review.agentName} </p>
            <p className="text-sm text-gray-600">Time: {review.date}</p>
            <p className="mt-2 text-gray-700">{review.text}</p>
            <button
              onClick={() => handleDelete(review._id)}
              className="mt-3 px-4 py-2 bg-red-500 text-white text-sm rounded-lg flex items-center gap-2 hover:bg-red-600"
            >
              <FaTrash />
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageReview;
