import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import Contact from "./pages/Contact/Contacts";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Orders from "./pages/Order/Order";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
