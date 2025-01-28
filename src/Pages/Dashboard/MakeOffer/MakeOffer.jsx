import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MakeOffer = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // get make offer data
  const { data: property, isLoading } = useQuery({
    queryKey: ["makeOffer", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/dashboard/makeOffer/${id}`);
      return res.data;
    },
  });

  // save offer to database
  const handleMakeOffer = (data) => {
    console.log("offered data ", data);

    axiosSecure.post("/makeOffer", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Offer Request Send",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // if loading show loading spinner

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleMakeOffer)}
        className="max-w-lg mx-auto py-10 shadow-lg p-6 bg-white rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Make an Offer
        </h1>
        {/* Property Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Property Title</label>
          <input
            type="text"
            {...register("propertyTitle")}
            value={property.propertyTitle}
            readOnly
            className="w-full border rounded-md p-2 bg-gray-100"
          />
        </div>
        {/* Property Location */}
        <div className="mb-4">
          <label className="block text-gray-700">Property Location</label>
          <input
            type="text"
            {...register("propertyLocation")}
            value={property.propertyLocation}
            readOnly
            className="w-full border rounded-md p-2 bg-gray-100"
          />
        </div>
        {/* Agent Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Agent Name</label>
          <input
            type="text"
            {...register("agentName")}
            value={property.agentName}
            readOnly
            className="w-full border rounded-md p-2 bg-gray-100"
          />
        </div>

        {/* Offer Amount */}
        <div className="mb-4">
          <label className="block text-gray-700">Offer Amount</label>
          <input
            type="number"
            {...register("offerAmount", {
              valueAsNumber: true,
              required: "Offer Amount is required", // Custom error message for required field
              min: {
                value: property.priceRange.minPrice,
                message: `Offer must be at least ${property.priceRange.minPrice}`,
              },
              max: {
                value: property.priceRange.maxPrice,
                message: `Offer cannot exceed ${property.priceRange.maxPrice}`,
              },
            })}
            defaultValue={property.priceRange.maxPrice}
            min={property.priceRange.minPrice}
            max={property.priceRange.maxPrice}
            className="w-full border rounded-md p-2"
          />
          {/* Display error if any */}
          {errors.offerAmount && (
            <p className="text-red-600 mt-2">{errors.offerAmount.message}</p>
          )}
        </div>
        {/* Buyer Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Buyer Email</label>
          <input
            type="text"
            {...register("buyerEmail")}
            value={user.email}
            readOnly
            className="w-full border rounded-md p-2 bg-gray-100"
          />
        </div>
        {/* Buyer Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Buyer Name</label>
          <input
            type="text"
            {...register("buyerName")}
            value={user.displayName}
            readOnly
            className="w-full border rounded-md p-2 bg-gray-100"
          />
        </div>
        {/* Hidden Fields */}
        <input
          type="hidden"
          {...register("status")}
          value="pending"
          name="status"
        />
        <input
          type="hidden"
          {...register("propertyImage")}
          value={property.propertyImage}
        />
        <input
          type="hidden"
          {...register("offeredTime")}
          value={moment().format("YYYY-MM-DD HH:mm:ss")}
        />
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full hover:duration-700 text-[#FF5A5F] hover:bg-[#FF5A5F]  border border-[#FF5A5F] hover:text-white py-2 px-4 rounded-md "
        >
          Submit Offer
        </button>
      </form>
    </div>
  );
};

export default MakeOffer;
