import React, { useContext } from "react";
// import BandageLogo from "../icons/bandagelogo";
// import Cart from "../cart";
import Login from "../login";
import { CiShoppingCart } from "react-icons/ci";
import { cartContext } from "../cartContext";
import { Link } from "react-router-dom";

function Nav() {
  const { cart } = useContext(cartContext);
  return (
    <header className="flex justify-around">
      <div className=" font-bold text-2xl mt-4 text-darkblue">
        <h1>BABE's</h1>
      </div>
      <div className="">
        <div>
          <ul className="flex gap-5 ml-20 mt-4 font-mono font-semibold font-Montserrat text-semibold text-center items-center">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
        </div>
      </div>
      <div className="userdiv flex justify-between items-center">
        <Login />
        <Link to="/Cart">
            <CiShoppingCart className=" size-8 color-blue" />
            </Link>
            {cart.length}
      </div>
    </header>
  );
}

export default Nav;
