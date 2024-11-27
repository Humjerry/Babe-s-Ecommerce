import ProductCard from "../../components/productcard.jsx";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { cartContext } from "../../components/cartContext.jsx";

function Itemdetail() {
 const {addtoCart} = useContext(cartContext)
  const location = useLocation();
  const { item } = location.state;

  return (
    <section>
      {item && (
        <div className="flex items-center justify-center mt-10 p-10">
          <div className=" w-2/6 justify-center">
            <img
              src={item.image}
              alt=""
              className=" shadow-xl h-72 rounded"
            />
          </div>
          <div className="flex w-3/6 flex-col items-center">
          <div className="thetext text-center justify-center ">
            <h1>{item.title}</h1>
            <p className="text-branded">${item.price}</p>
            <p>{item.description}</p>
          </div>
          <button
            onClick={addtoCart}
            className="costbt bg-brandred text-white"
          >
            Add to cart
          </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Itemdetail;
