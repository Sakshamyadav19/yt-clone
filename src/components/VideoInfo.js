import React, { useEffect } from "react";
import { GET_VIDEO, YT_API_KEY } from "../utils/constants";

const VideoInfo = ({ id }) => {
  useEffect(() => {
    getVideoInfo();
  }, []);
  const getVideoInfo = async () => {
    const data = await fetch(GET_VIDEO + id + "&key=" + YT_API_KEY);
    const json = await data.json();
    console.log(json);
  };
  return <div>VideoInfo</div>;
};

export default VideoInfo;
