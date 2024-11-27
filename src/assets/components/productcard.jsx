import ItemImg from "../images/firstshow/product-cover-5 (2).png";
import "../../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "./cartContext";

function Productcard({ item }) {
  const { addtoCart } = useContext(cartContext);
  // const notify = () => toast("Wow so easy!");
  return (
    <div className="text-center p-3 rounded bg-lightgray shadow-lg w-[30vmin] ">
      <div className="">
        <img src={item.image} alt="" />
      </div>
      <div>
        <h2 className="font-bold font-inter">{item.title}</h2>
        <p>{item.ready}</p>
        <div className="cost flex items-center justify-center gap-1 font-bold">
          <h2>{}</h2>
          <h2 className="text-emerald">${item.price}</h2>
        </div>
        <Link to="/Itemdetail" key={item.id} state={{ item }}>
          <button className="costbtn bg-brandred text-white mt-5">
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Productcard;
