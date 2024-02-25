import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglemenu } from "../utils/appSlice";
import { addsearch } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchquery, setsearchquery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const toggleMenu = () => {
    dispatch(togglemenu());
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchCache[searchquery]) {
        setsuggestions(searchCache[searchquery]);
      } else getSuggestions();
    }, 200);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchquery]);

  const getSuggestions = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchquery
    );
    const json = await data.json();
    setsuggestions(json[1]);
    dispatch(addsearch({ [searchquery]: suggestions }));
  };

  return (
    <div className="p-2 grid grid-flow-col">
      <div className="flex col-span-2">
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
      <div className="col-span-8">
        <div className="flex h-full">
          <input
            className="border border-black rounded-l-full w-full  px-3"
            placeholder="Search"
            value={searchquery}
            onChange={(e) => setsearchquery(e.target.value)}
            onFocus={() => setshowsuggestions(true)}
            onBlur={() => setshowsuggestions(false)}
          ></input>
          <button className="border border-black rounded-r-full px-3 ">
            🔍
          </button>
        </div>
        <div className="absolute bg-gray-100 w-[48rem] ml-2 px-2 rounded-lg opacity-95">
          <ul>
            {showsuggestions &&
              suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-300 px-2 border-b-2 py-1"
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="col-span-2 flex justify-end">
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
