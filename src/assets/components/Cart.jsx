import React from "react";
import { useLocation } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const { item } = location.state || {}; // Fallback to avoid destructuring undefined

  console.log("Cart Item:", item); // Debugging log
  return (
    <div>
      {item ? (
        <div>
          <h1>{item.title}</h1>
          <p>{item.price}</p>
          <img src={item.image} alt={item.title} />
        </div>
      ) : (
        <p>No item in cart</p>
      )}
    </div>
  );
}

export default Cart;
