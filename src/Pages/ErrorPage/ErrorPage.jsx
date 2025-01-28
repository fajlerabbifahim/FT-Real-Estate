import React from "react";
import errorIMG from "../../assets/ErrorGIF/404.gif";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Sorry, we can't find the page you're looking for.
          </p>
          <img className="max-w-xs" src={errorIMG} alt="" />
          <div className="mt-6">
            <Link
              to="/"
              className="bg-[#FF5A5F] text-white hover:bg-[#f17676] px-6 py-2 rounded-sm shadow-md font-semibold"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
