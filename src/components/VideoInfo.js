import React, { useEffect, useState } from "react";
import { GET_VIDEO, YT_API_KEY } from "../utils/constants";

const VideoInfo = ({ id }) => {
  const [videodata, setvideodata] = useState([]);
  useEffect(() => {
    getVideoInfo();
  }, []);
  const getVideoInfo = async () => {
    const data = await fetch(GET_VIDEO + id + "&key=" + YT_API_KEY);
    const json = await data.json();
    setvideodata(json.items[0].snippet);
  };
  return (
    <div className="my-2">
      <div>{videodata.title}</div>
      <div>{videodata.channelTitle}</div>
    </div>
  );
};

export default VideoInfo;
