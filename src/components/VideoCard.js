import React from "react";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="border border-gray-200 w-11/12 m-2">
      <img
        className=" w-full rounded-lg"
        alt="thumbnail"
        src={thumbnails.high.url}
      ></img>
      <div className=" font-bold">{title}</div>
      <div className="mt-2 font-semibold">{channelTitle}</div>
      <div>{viewCount + " views"}</div>
    </div>
  );
};

export default VideoCard;
