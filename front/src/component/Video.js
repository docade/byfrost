import React from "react";
import Video from "../img/video/video.mov";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video
        src={Video}
        controls
        autoPlay
        muted
        style={{ width: "150%", height: "100%", objectFit: "cover" , top:"-83px" }}
        className="video2"
      />
    </div>
  );
};

export default VideoPlayer;
