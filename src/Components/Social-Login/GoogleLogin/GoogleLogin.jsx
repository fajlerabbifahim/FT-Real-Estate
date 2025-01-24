import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const { signinWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const userData = await signinWithGoogle(googleProvider);
    const user = userData.user;
    console.log("google user data", userData.user);
    const newUser = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };

    axiosPublic.post("/user", newUser).then((res) => {
      if (res.data.insertedId) {
        alert("user create successful");
      }
    });
    navigate("/");
  };

  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition-all shadow-sm"
    >
      <FcGoogle size={24} />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLogin;
