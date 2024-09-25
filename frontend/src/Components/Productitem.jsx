import React, { useContext } from "react";
import { ShopContext } from "../Context/Context";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Productitem = ({ id, image, name, price, rating }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`product/${id}`} className=" cursor-pointer">
      <div className="card border p-3">
        <div className="overflow-hidden">
          <img
            src={image[0]}
            alt=""
            className="hover:scale-110 transition ease-in-out"
          />
        </div>
        <div className="card-body">
          <p className="pt-3 pb-1 text-xs">{name}</p>
          <Rating value={rating} />
          <p className="text-sm font-extrabold">
            {currency} {price}
          </p>
        </div>
        {/* <div className="p-3 text-center">
          <hr className="" />
          <Link to="/cart">
            <button className="bg-black p-3 text-white">Add to Cart</button>
          </Link>

          <hr />
        </div> */}
      </div>
    </Link>
  );
};

export default Productitem;
