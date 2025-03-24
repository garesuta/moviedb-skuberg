import React from "react";
import { useCart } from "../context/CartContext";

const Card = ({ movie }) => {
  const { getItemQuantity, addToCart, removeFromCart, decreaseFromCart } =
    useCart();
  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-blue-300">
      <div className="p-2">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-md h-1/2 w-full object-cover"
        />
        <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
        <p className="text-sm text-gray-400 mt-1">
          {truncateText(movie.overview, 100)} {/* Truncate to 100 characters */}
        </p>
        <p className="text-lg font-bold mt-2 text-blue-500">${movie.price}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => addToCart(movie)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            +
          </button>
          <div className="flex items-center font-bold py-2 px-4 rounded">
            {getItemQuantity(movie.id)}
          </div>
          <button
            onClick={() => decreaseFromCart(movie.id)}
            className="bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            -
          </button>

          <button
            onClick={() => removeFromCart(movie.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
