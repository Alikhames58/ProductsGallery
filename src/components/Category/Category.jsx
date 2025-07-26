import { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import Loader from "../Loader/Loader";

export default function Category() {
  const { products, setSelectedCategory, selectedCategory, isLoading } =
    useContext(productContext);

  const categories = [...new Set(products.map((p) => p.category))];

  const baseStyle =
    "w-full text-left p-3 rounded-lg text-md transition-all duration-200 capitalize";
  const activeStyle = "bg-indigo-600 text-white font-semibold shadow-md";
  const inactiveStyle = "hover:bg-gray-100 hover:text-indigo-600 text-gray-700";
  if (isLoading) return <Loader />;
  return (
    <ul className="space-y-2">
      <li>
        <button
          onClick={() => setSelectedCategory(null)}
          className={`${baseStyle} ${
            !selectedCategory ? activeStyle : inactiveStyle
          }`}
        >
          All Categories
        </button>
      </li>
      {categories.map((cat) => (
        <li key={cat}>
          <button
            onClick={() => setSelectedCategory(cat)}
            className={`${baseStyle} ${
              selectedCategory === cat ? activeStyle : inactiveStyle
            }`}
          >
            {cat}
          </button>
        </li>
      ))}
    </ul>
  );
}
