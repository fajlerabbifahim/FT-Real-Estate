import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/Login-Images/login.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../../Components/Social-Login/GoogleLogin/GoogleLogin";

const Login = () => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const handleLogin = (data) => {
    console.log("login data", data);
    login(data.email, data.password)
      .then(() => {
        alert("login successfully");
        navigate("/");
      })
      .catch((e) => {
        console.log("login error", e.message);
      });
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="bg-white w-full max-w-4xl mx-4 md:mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Section */}
              <div className="hidden md:flex flex-col justify-center items-center bg-[#F4F4F4] p-6">
                {/* <h2 className="text-3xl font-semibold text-[#00509E] mb-4">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-center">
              Log in to access your account and explore your dream property.
            </p> */}
                <img
                  src={loginImage}
                  alt="Login Illustration"
                  className="mt-4"
                />
              </div>

              {/* Right Section */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#00509E]">Login</h2>
                </div>

                <form
                  onSubmit={handleSubmit(handleLogin)}
                  className="space-y-4"
                >
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

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FFC947] text-white rounded-lg text-lg font-semibold hover:bg-[#FFD365] transition duration-300"
                  >
                    Login
                  </button>

                  {/* google signup  */}

                  <GoogleLogin />

                  {/* Signup Redirect */}
                  <p className="text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-[#00509E] font-bold hover:underline"
                    >
                      Sign Up
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

export default Login;
