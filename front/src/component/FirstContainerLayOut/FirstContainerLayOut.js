import React from "react";
import { styled } from "styled-components";
import Video from "./Video";
import Explanation from "./Explanation";

const FirstContainer = () => {
  return (
    <LayOut>
      <Video />
      <Explanation />
    </LayOut>
  );
};

export default FirstContainer;

const LayOut = styled.div`
  display: flex;
  justify-content: space-around;
`;
