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
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default VideoPlayer;
