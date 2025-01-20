import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Components/Loader/Loader";

function PropertyDetails() {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [showModal, setShowModal] = useState(false);
  const [reviewText, setReviewText] = useState("");

  //   fetch property with id
  const { data: property, isLoading } = useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/propertyDetails/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  console.log(property);
  return <div>property</div>;
}

export default PropertyDetails;
