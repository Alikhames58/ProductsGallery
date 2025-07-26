import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { productContext } from "../../context/ProductContext";
import { Heart } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToWishlist } = useContext(productContext);

  function handleAddToWishlist(product) {
    addToWishlist(product);
    toast.success("Added to wishlist ❤️");
  }

  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        toast.error("Error fetching product details");
        console.error("Error fetching product details", err);
      }
    }
    fetchDetails();
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="pt-28 pb-16 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center items-center bg-white p-6 rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full h-auto max-h-96 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-center py-4">
          <h4 className="text-md font-bold text-indigo-500 dark:text-indigo-400 uppercase mb-2">
            {product.category}
          </h4>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            {product.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
            {product.description}
          </p>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-4xl font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center gap-1 text-yellow-500">
              <span>⭐</span>
              <span className="font-bold">{product.rating.rate}</span>
              <span className="text-gray-400 dark:text-gray-500 text-sm">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>

          <button
            onClick={() => handleAddToWishlist(product)}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-xl hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 text-center"
          >
            <Heart size={20} />
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
}
