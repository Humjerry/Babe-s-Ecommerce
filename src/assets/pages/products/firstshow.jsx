import React from "react";
import ChevronLeft from "../../components/chevronleft";
import ChevronRight from "../../components/chevronright";
import ProductCard from "../../components/productcard";
import { products } from "./data";

function Firstshow() {
  return (
    <>
    <section>

    </section>
    <section className="firstshow w-[80%] m-auto flex h-[100vh] mb-5 mt-5">
      <div className=" w-2/6 order-1 bg-firstshow rounded bg-cover bg-center h-full">
        <h2 className="text-left font-bold shadow-slate-50 text-1xl text-white text-Montserrat ml-5">
          Your Great Meal
        </h2>
        <p className="text-left shadow-slate-50 text-sm text-white text-Montserrat ml-5">
          Waiting Here!
        </p>
      </div>
      <div className="ordertwo overflow-hidden order-2 justify-evenly ml-2 w-3/5">
        <div className="flex items-center ">
          <div className="w-2/4 text-2xl font-bold">
            <h2 className=" font-Montserrat">BESTSELLER </h2>
          </div>
          <div className="flex  gap-5 ">
            <ul className="flex w-3/4 gap-5 justify-evenly items-center font-Montserrat text-base font-medium">
              <li className="text-brandred">Men</li>
              <li>Women</li>
              <li>Accessories</li>
            </ul>
            <div className=" gap-2 flex mb-2">
              <ChevronRight />
              <ChevronLeft />
            </div>
          </div>
        </div>
        <hr className="opacity-[0.25]" />
        {products && (
          <div className="flex gap-2 flex-wrap p-5">
            {" "}
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
    </>
  );
}

export default Firstshow;
