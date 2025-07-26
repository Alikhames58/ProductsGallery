import { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { toast } from "react-toastify";
import { Heart } from "lucide-react";

import React from "react";

export default function Products() {
  const {
    products,
    selectedCategory,
    searchTerm,
    sortOption,
    isLoading,
    isError,
    addToWishlist,
  } = useContext(productContext);
  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;

  let filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  if (searchTerm.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (sortOption === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "name-asc") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "name-desc") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  function handleAddToWishlist(product) {
    addToWishlist(product);
    toast.success("Added to wishlist ❤️");
  }

  return (
    <div className="w-full">
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-xl shadow-md p-12 min-h-[40vh]">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            No Products Found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Try adjusting your search or category selection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <>
              <Link
                to={`/productdetails/${product.id}`}
                key={product.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden group flex flex-col"
              >
                <div className="w-full h-48 bg-white flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-4 flex flex-col flex-grow dark:bg-gray-800">
                <h4 className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-1">
                  {product.category}
                </h4>
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 flex-grow mb-2">
                  {product.title.split(" ").slice(0, 8).join(" ")}
                </h3>
                <p className="text-lg font-extrabold text-gray-900 dark:text-white mt-auto">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-xl hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 text-center"
                >
                  <Heart size={20} />
                  Add to WishList
                </button>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
