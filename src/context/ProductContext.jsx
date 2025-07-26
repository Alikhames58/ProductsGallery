import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const productContext = createContext();
export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });
  function toggleWishlist(product) {
    setWishlist((prev) => {
      const isAlreadyInWishlist = prev.find((item) => item.id === product.id);
      if (isAlreadyInWishlist) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  }

  function addToWishlist(product) {
    setWishlist((prev) => {
      // ما تضيفش نفس المنتج مرتين
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  }
  function deleteFromWishlist(productId) {
    setWishlist((prev) => prev.filter((product) => product.id !== productId));
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products`);
        const data = await res.data;
        console.log(data);
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
        sortOption,
        setSortOption,
        isLoading,
        isError,
        errorMessage,
        toggleWishlist,
        addToWishlist,
        wishlist,
        deleteFromWishlist,
      }}
    >
      {children}
    </productContext.Provider>
  );
}
