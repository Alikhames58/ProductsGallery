import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import Products from "../Products/Products";
import Category from "../Category/Category";
import React from "react";

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: "slick-dots slick-thumb",
  };
  const { products } = useContext(productContext);

  return (
    <div className="pt-24 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto mb-16">
        <Slider {...settings}>
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-10 h-96 md:h-80">
                <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 hidden md:block">
                    {product.description.split(" ").slice(0, 15).join(" ")}...
                  </p>
                  <a
                    href={`productdetails/${product.id}`}
                    className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
                  >
                    Shop Now
                  </a>
                </div>
                <div className="md:w-1/2 flex justify-center items-center h-48 md:h-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-screen-xl flex flex-col md:flex-row gap-8 mx-auto px-4">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md sticky top-28">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-5 text-center md:text-left">
              Categories
            </h2>
            <Category />
          </div>
        </aside>

        {/* Products Section */}
        <main className="w-full md:w-3/4 lg:w-4/5 py-5">
          <Products />
        </main>
      </div>
    </div>
  );
}
