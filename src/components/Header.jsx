import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Movie Database</div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center background-white text-gray-800 p-2 rounded-md">
        <span className="mr-2">0</span>
        <img
          src="/online-shopping.png"
          alt="Cart Icon"
          className="w-6 h-6 mr-2 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
