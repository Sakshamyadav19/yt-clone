import React from "react";
import { useDispatch } from "react-redux";
import { togglemenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(togglemenu());
  };

  return (
    <div className="p-2 grid grid-flow-col">
      <div className="flex grid-cols-1">
        <img
          alt="menu"
          className="h-10"
          onClick={toggleMenu}
          src="https://th.bing.com/th?q=Hamburger+Menu+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.7&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
        ></img>
        <img
          alt="logo"
          className="h-10 ml-5"
          src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png"
        ></img>
      </div>
      <div className="flex grid-cols-10">
        <input
          className="border border-black rounded-l-full w-full  px-3"
          placeholder="Search"
        ></input>
        <button className="border border-black rounded-r-full px-3 ">🔍</button>
      </div>
      <div className="grid-cols-1 flex justify-end">
        <img
          alt="user"
          className="h-10"
          src="https://th.bing.com/th?id=OIP.f3DM2upCo-p_NPRwBAwbKQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
        ></img>
      </div>
    </div>
  );
};

export default Header;
