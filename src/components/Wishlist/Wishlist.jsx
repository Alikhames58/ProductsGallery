import { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { HeartCrack, Trash2 } from "lucide-react";
import React from "react";

export default function Wishlist() {
  const { wishlist, deleteFromWishlist } = useContext(productContext);

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 dark:bg-gray-950">
        <HeartCrack className="text-gray-400 dark:text-gray-600" size={64} />
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mt-4">
          Your Wishlist is Empty
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Looks like you haven't added anything yet.
        </p>
        <Link
          to="/"
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Discover Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-gray-800 dark:text-white">
          Your Wishlist
        </h2>
        <div className="flex flex-col gap-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center gap-4 transition-shadow hover:shadow-lg"
            >
              <Link
                to={`/productdetails/${product.id}`}
                className="w-full sm:w-24 h-24 flex-shrink-0 bg-white rounded-lg p-1"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </Link>
              <div className="flex-grow text-center sm:text-left">
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {product.title}
                </h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-md">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <Link
                  to={`/productdetails/${product.id}`}
                  className="px-5 py-2 bg-indigo-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-300 font-semibold text-sm rounded-lg hover:bg-indigo-200 dark:hover:bg-gray-700 transition"
                >
                  View
                </Link>
                <button
                  className="w-10 h-10 flex items-center justify-center bg-red-100 dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-full hover:bg-red-200 dark:hover:bg-gray-700 transition"
                  onClick={() => deleteFromWishlist(product.id)}
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
