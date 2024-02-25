import React from "react";

const ChatMsg = ({ name, msg }) => {
  return (
    <div className="flex ">
      <img
        alt="user"
        className="h-10 mt-2"
        src="https://th.bing.com/th?id=OIP.f3DM2upCo-p_NPRwBAwbKQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
      ></img>
      <div>
        <p className=" font-bold">{name}</p>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default ChatMsg;
