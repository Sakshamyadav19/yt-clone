import React, { useEffect } from "react";

const CommentCard = ({ data }) => {
  return (
    <>
      <div className="flex border border-1-black">
        <img
          alt="user"
          className="h-8"
          src="https://th.bing.com/th?id=OIP.f3DM2upCo-p_NPRwBAwbKQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
        ></img>
        <div>
          <p className=" font-semibold">{data.name}</p>
          <p>{data.text}</p>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
