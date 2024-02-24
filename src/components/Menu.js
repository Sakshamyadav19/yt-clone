import React from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const toggle = useSelector((store) => store.menu);
  return (
    toggle && (
      <div className="border border-gray-200 h-screen w-2/6">
        <ul>
          <li className="mt-2 shadow-lg p-2 hover:bg-gray-200">Subsciption</li>
          <li className="mt-2 shadow-lg p-2 hover:bg-gray-200">Shorts</li>
          <li className="mt-2 shadow-lg p-2 hover:bg-gray-200">Trending</li>
          <li className="mt-2 shadow-lg p-2 hover:bg-gray-200">History</li>
          <li className="mt-2 shadow-lg p-2 hover:bg-gray-200">Home</li>
        </ul>
      </div>
    )
  );
};

export default Menu;
