import React, { useEffect, useState } from "react";
import { VIDEO_LIST, YT_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const MainContainer = () => {
  const [videoList, setVideoList] = useState("");

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(VIDEO_LIST + YT_API_KEY);
    const json = await data.json();
    setVideoList(json.items);
  };
  if (!videoList) return;

  return (
    <div className="grid grid-cols-4">
      {videoList.map((video, index) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={index} data={video} />
        </Link>
      ))}
    </div>
  );
};

export default MainContainer;
