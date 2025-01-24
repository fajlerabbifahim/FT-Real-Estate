import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import registerIMG from "../../assets/Login-Images/register.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { MdPhoto } from "react-icons/md";
import useImageUpload from "../../Hooks/useImageUpload";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const Register = () => {
  const { registerUser, updateUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  // use image link from useImageUpload Hook, image upload imgBB
  const { uploadImageToImgBB, loading, error, imageUrl } = useImageUpload();
  const handleRegister = async (data) => {
    // get data useing reactHookFrom
    const { name, email, password, profilePicture } = data;
    const uploadedImageUrl = await uploadImageToImgBB(profilePicture[0]);
    //create a object and save to database userCollection
    const newUser = {
      name: name,
      email: email,
      photo: uploadedImageUrl,
    };

    console.log("user object for save database", newUser);

    registerUser(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: uploadedImageUrl }).then(
          () => {
            axiosPublic.post("/user", newUser).then((res) => {
              if (res.data.insertedId) {
                alert("user create successful");
                navigate("/");
              }
            });
          }
        );
      })
      .catch((e) => {
        console.log("error message", e.message);
      });
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className=" flex items-center justify-center mt-20 ">
          <div className="bg-white w-full max-w-4xl mx-4 md:mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Section */}
              <div className="hidden md:flex flex-col justify-center items-center bg-[#F4F4F4] p-6">
                <img
                  src={registerIMG}
                  alt="Signup Illustration"
                  className="mt-4"
                />
              </div>

              {/* Right Section */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#00509E]">
                    Register
                  </h2>
                </div>

                <form
                  onSubmit={handleSubmit(handleRegister)}
                  className="space-y-4"
                >
                  {/* User Name */}
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <FaUser className="text-[#00509E]" />
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Your Name"
                      className="flex-1 outline-none border-none pl-3"
                    />
                  </div>

                  {/* Upload Profile Picture */}
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <label
                      htmlFor="profilePicture"
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <MdPhoto className="text-[#00509E]" />
                      <span className="text-gray-500">
                        Upload Profile Picture
                      </span>
                    </label>
                    <input
                      id="profilePicture"
                      type="file"
                      accept="image/*"
                      {...register("profilePicture")}
                      className="hidden"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <FaEnvelope className="text-[#00509E]" />
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="Email"
                      className="flex-1 outline-none border-none pl-3"
                    />
                  </div>

                  {/* Password */}
                  <div className="flex items-center border rounded-lg px-3 py-2">
                    <FaLock className="text-[#00509E]" />
                    <input
                      type="password"
                      {...register("password")}
                      placeholder="Password"
                      className="flex-1 outline-none border-none pl-3"
                    />
                  </div>

                  {/* Sign Up Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FFC947] text-white rounded-lg text-lg font-semibold hover:bg-[#FFD365] transition duration-300"
                  >
                    Sign Up
                  </button>

                  {/* Login Redirect */}
                  <p className="text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-[#00509E] font-bold hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Register;
