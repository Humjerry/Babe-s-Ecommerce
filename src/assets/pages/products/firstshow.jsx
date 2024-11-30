import React from "react";
import ChevronLeft from "../../components/chevronleft";
import ChevronRight from "../../components/chevronright";
import Img1 from "../../images/firstshow/fixed-height (1) - Copy.svg";
import Img2 from "../../images/firstshow/fixed-height.svg";
import Img3 from "../../images/firstshow/product-cover-5 (1).svg";
import ProductCard from "../../components/productcard";
import { products } from "./data";

function Firstshow() {
  return (
    <>
      <section className="flex w-100% h-60 bg-gray items-center  gap-10 justify-center p-5">
        <div className="flex h-48 w-62 bg-white rounded shadow-lg  items-center">
          <div className="flex-col items-center bg-white text-left p-2 justify-between">
            <p className="font-Poppins text-sm font-normal">New take</p>
            <h2 className="font-Poppins font-bold text-xl mt-3 mb-3">
              Choko Cream
            </h2>
            <p className="font-Poppins text-sm font-normal">In demand</p>
          </div>
          <div>
            <img src={Img3} alt="" />
          </div>
        </div>
        <div className="flex h-48 w-62 bg-white rounded shadow-lg  items-center">
          <div className="flex-col items-center bg-white text-left p-2 justify-between">
            <p className="font-Poppins text-sm font-normal">Fresh take</p>
            <h2 className="font-Poppins font-bold text-xl mt-3 mb-3">
              Green Apples
            </h2>
            <p className="font-Poppins text-sm font-normal">Great review</p>
          </div>
          <div>
            <img src={Img2} alt="" />
          </div>
        </div>
        <div className="flex h-48 w-62 bg-white rounded shadow-lg  items-center">
          <div className="flex-col items-center bg-white text-left p-2 justify-between">
            <p className="font-Poppins text-sm font-normal">Hot take</p>
            <h2 className="font-Poppins font-bold text-xl mt-3 mb-3">
              Baked Beef
            </h2>
            <p className="font-Poppins text-sm font-normal">Great sales</p>
          </div>
          <div>
            <img src={Img1} alt="" />
          </div>
        </div>
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
