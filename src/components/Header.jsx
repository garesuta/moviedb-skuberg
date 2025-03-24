import React, { useState } from "react";
import Display from "./Display";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  //   const [cart, setCart] = useState([]);
  const { cartQuantity } = useCart();
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Movie Marketplace</div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative flex items-center background-white text-gray-800 p-2 rounded-md">
          {/* Cart Count Badge */}
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-2 -translate-y-2">
            {cartQuantity}
          </span>
          <Link to={"/cart"}>
            <img
              src="/online-shopping.png"
              alt="Cart Icon"
              className="w-6 h-6 mr-2 cursor-pointer"
            />
          </Link>
        </div>
      </header>
      <Display search={searchQuery} />
    </>
  );
};

export default Header;
