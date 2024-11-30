import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/navbar/nav.jsx";
import Home from "./assets/pages/home.jsx";
import Firstshow from "./assets/pages/products/firstshow.jsx";
import Itemdetail from "./assets/pages/itemspage/itemdetail.jsx";
import CartProvider from "./assets/components/cartContext.jsx";
import Cart from "./assets/components/cart.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer /> {/* ToastContainer should be global */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Firstshow" element={<Firstshow />} />
            <Route path="/Itemdetail" element={<Itemdetail />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
