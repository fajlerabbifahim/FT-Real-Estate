import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useAuth(); // Get logged-in user info
  const axiosSecure = useAxiosSecure();
  // Fetch reviews for the logged-in user

  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${user?.email}`);
      return res.data;
    },
  });

  // Handle delete review

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

        axiosSecure.delete(`/reviews/${id}`).then((res) => {
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
                Reviewed on: {new Date(review.date).toLocaleString()}
              </p>
              <p className="text-gray-700 mt-2">{review.text}</p>
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
