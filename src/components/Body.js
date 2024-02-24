import React from "react";
import Menu from "./Menu";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <Menu />
      <MainContainer />
    </div>
  );
};

export default Body;
