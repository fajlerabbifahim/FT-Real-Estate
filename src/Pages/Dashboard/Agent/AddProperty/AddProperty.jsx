import React from "react";
import { useForm } from "react-hook-form";
import useImageUpload from "../../../../Hooks/useImageUpload";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddProperty = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { uploadImageToImgBB } = useImageUpload();
  const handleAddProperty = async (data) => {
    const propertyImageURL = await uploadImageToImgBB(data.propertyImage[0]);
    const agentImageURL = await uploadImageToImgBB(data.agentImage[0]);

    const priceRange = {
      minPrice: data.minPrice,
      maxPrice: data.maxPrice,
    };
    delete data.minPrice;
    delete data.maxPrice;

    const property = {
      ...data,
      propertyImage: propertyImageURL,
      agentImage: agentImageURL,
      priceRange,
      agentEmail: user?.email,
    };

    axiosSecure.post("/property", property).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      reset();
    });

    console.log("add property data", property);
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Property</h2>
      <form onSubmit={handleSubmit(handleAddProperty)} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Property Title</label>
          <input
            type="text"
            {...register("propertyTitle")}
            placeholder="Enter property title"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Property Location</label>
          <input
            type="text"
            {...register("propertyLocation")}
            placeholder="Enter property location"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Property Size</label>
          <input
            type="text"
            {...register("propertySize")}
            placeholder="Enter property size (e.g., 2000 sqft)"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Bedrooms</label>
            <input
              type="number"
              {...register("bedrooms", { valueAsNumber: true })}
              placeholder="Number of bedrooms"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Bathrooms</label>
            <input
              type="number"
              {...register("bathrooms", { valueAsNumber: true })}
              placeholder="Number of bathrooms"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            {...register("description")}
            placeholder="Write a description for the property"
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Property Image
          </label>
          <input
            type="file"
            {...register("propertyImage")}
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const previewUrl = URL.createObjectURL(file);
                const imgElement = document.getElementById("imagePreview");
                imgElement.src = previewUrl;
                imgElement.style.display = "block";
              }
            }}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <div className="mt-4 flex justify-center">
            <img
              id="imagePreview"
              alt="Selected"
              className="hidden w-full max-w-40 rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Agent Name</label>
          <input
            type="text"
            {...register("agentName")}
            placeholder="Enter agent name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Agent Image
          </label>
          <input
            type="file"
            {...register("agentImage")}
            accept="image/*"
            onChange={(e) => {
              const agentFile = e.target.files[0];
              if (agentFile) {
                const previewUrl = URL.createObjectURL(agentFile);
                const imgElement = document.getElementById("agentImagePreview");
                imgElement.src = previewUrl;
                imgElement.style.display = "block";
              }
            }}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <div className="mt-4 flex justify-center">
            <img
              id="agentImagePreview"
              alt="Agent Selected"
              className="hidden w-full  max-w-40 rounded-lg shadow-md object-cover"
            />
          </div>
        </div>

        <input
          {...register("verificationStatus")}
          hidden
          type="text"
          value="pending"
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Minimum Price</label>
            <input
              type="number"
              {...register("minPrice", { valueAsNumber: true })}
              placeholder="Minimum price"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Maximum Price</label>
            <input
              type="number"
              {...register("maxPrice", { valueAsNumber: true })}
              placeholder="Maximum price"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn hover:duration-700 w-full text-[#FF5A5F] hover:bg-[#FF5A5F]  border border-[#FF5A5F] hover:text-white"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
