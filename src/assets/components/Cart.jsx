import React from "react";
import { useContext } from "react";
import { cartContext } from "./cartContext";

function Cart() {
  const { cart, setCart } = useContext(cartContext);

  return (
    <div>
      {cart === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <p>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
