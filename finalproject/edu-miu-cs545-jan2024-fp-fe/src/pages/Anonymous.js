import React from "react";
import { Link, Outlet } from "react-router-dom";

function Anonymous() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="h-screen bg-overlay flex flex-col justify-center items-center">
        <h1 className="font-bold text-6xl text-white mb-5">DreamHomes</h1>
        <Link
          to="/properties"
          className="px-8 py-4 text-xl text-white font-semibold rounded-lg border border-white hover:bg-white hover:text-purple-500 transition-all duration-300"
        >
          Explore Our Listings
        </Link>
      </div>

      <div className="max-w-5xl mx-auto py-10">
        <h1 className="font-semibold text-4xl text-white mb-8">Need Help</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="px-6 py-8 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
            <h1 className="font-semibold text-3xl mb-4">
              Personalized Budget Assessment
            </h1>
            <p className="text-gray-700">
              Get tailored guidance to assess your budget and financial
              capabilities.
            </p>
          </div>
          <div className="px-6 py-8 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
            <h1 className="font-semibold text-3xl mb-4">
              Empower Your Financial Planning
            </h1>
            <p className="text-gray-700">
              Take control of your expenses and gain detailed insights for
              better financial planning.
            </p>
          </div>
          <div className="px-6 py-8 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
            <h1 className="font-semibold text-3xl mb-4">
              Explore a World of Property Possibilities
            </h1>
            <p className="text-gray-700">
              Immerse yourself in a diverse selection of properties for sale or
              rent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anonymous;
