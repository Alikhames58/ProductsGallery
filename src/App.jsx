import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import HomePage from "./components/HomePage/HomePage";
import ProductContextProvider from "./context/ProductContext";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import NotFound from "./components/Notfound/Notfound";
import Wishlist from "./components/Wishlist/Wishlist";
function App() {
  return (
    <>
      <BrowserRouter>
        <ProductContextProvider>
          <Navbar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path={"products"} element={<Products />} />
            <Route path={"/productdetails/:id"} element={<ProductDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </ProductContextProvider>
        <ToastContainer position="top-right" autoClose={3000} />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
