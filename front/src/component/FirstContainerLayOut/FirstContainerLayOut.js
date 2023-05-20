import React from "react";
import { styled } from "styled-components";
import VideoLayOut from "./VideoLayOut";
import Explanation from "./Explanation";

const FirstContainer = () => {
  return (
    <LayOut>
      <VideoLayOut>ss</VideoLayOut>
      <Explanation />
    </LayOut>
  );
};

export default FirstContainer;

const LayOut = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  flex-direction: row;
`;

const VideoBox = styled.div`
  width: 240px;
  height: 370px;
`;
