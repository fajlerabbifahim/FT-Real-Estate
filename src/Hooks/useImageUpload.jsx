import { useState } from "react";
import axios from "axios";

// Custom Hook for uploading image to ImgBB
const useImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const uploadImageToImgBB = async (imageFile) => {
    setLoading(true);
    setError(null);

    const imgbbApiKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      // Send the image to ImgBB
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData
      );
      setImageUrl(response.data.data.url); // Set the uploaded image URL
      setLoading(false);
      return response.data.data.url; // Return the link to the uploaded image
    } catch (error) {
      setLoading(false);
      setError("Image upload failed. Please try again.");
      console.error("Image upload failed:", error);
      throw error;
    }
  };

  return {
    uploadImageToImgBB,
    loading,
    error,
    imageUrl,
  };
};

export default useImageUpload;
