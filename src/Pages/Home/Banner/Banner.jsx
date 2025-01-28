import React from "react";
import bannerIMG from "../../../assets/BannerIMG/bannerImage.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerIMG})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Property</h1>
        <p className="text-lg mb-6">
          Discover luxurious homes, apartments, and offices that match your
          lifestyle.
        </p>
        <Link to="/allProperties">
          <button className="px-6 py-3 bg-[#FF5A5F] hover:bg-[#f56b70] text-white rounded-lg">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
