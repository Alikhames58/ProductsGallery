import { Link } from "react-router-dom";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-8xl md:text-9xl font-extrabold text-indigo-600 dark:text-indigo-500 mb-2">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md">
        Oops! The page you are looking for has been moved or doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
