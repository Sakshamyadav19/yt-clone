import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
  const toggle = useSelector((store) => store.menu);
  return (
    toggle && (
      <div className="fixed opacity-90 bg-gray-200 border border-gray-200 h-screen w-3/12">
        <ul>
          <Link to={"/"}>
            <li className="mt-2 shadow-lg p-2 hover:bg-gray-400">Home</li>
          </Link>
          <li className="mt-2 shadow-lg p-2 hover:bg-gray-400">Subsciption</li>
          <li className="mt-2 shadow-lg p-2 hover:bg-gray-400">Shorts</li>
          <li className="mt-2 shadow-lg p-2 hover:bg-gray-400">Trending</li>
          <li className="mt-2 shadow-lg p-2 hover:bg-gray-400">History</li>
        </ul>
      </div>
    )
  );
};

export default Menu;
