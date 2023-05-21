import React from "react";
import { styled } from "styled-components";
import Video from "../Video";

const VideoLayOut = () => {
  return (
    <VedioBox>
      <Video />
    </VedioBox>
  );
};

export default VideoLayOut;

const VedioBox = styled.div`

  width: 662px;
  height: 440px;
  background-color: black;
`;
