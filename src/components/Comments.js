import React from "react";
import CommentCard from "./CommentCard";
import { commentsData } from "../utils/constants";

const Comments = () => {
  const CommentList = ({ data }) => {
    return data.map((comment, index) => (
      <div key={index}>
        <CommentCard data={comment} />
        <div className="pl-5 border border-l-2">
          <CommentList data={comment.replies} />
        </div>
      </div>
    ));
  };
  return (
    <div>
      <h1 className="font-bold text-xl">Comments</h1>
      <CommentList data={commentsData} />
    </div>
  );
};

export default Comments;
