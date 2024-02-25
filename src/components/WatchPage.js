import React from "react";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import VideoInfo from "./VideoInfo";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  return (
    <div className="flex w-full">
      <div className="aspect-video w-1/2 ml-44">
        <iframe
          height="100%"
          width="100%"
          src={"https://www.youtube.com/embed/" + id + "?si=kaXR8-OiOeqEKpV7"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <VideoInfo id={id} />
        <Comments />
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchPage;
