import React from "react";
import { styled } from "styled-components";

const SecondContainerLayOut = () => {
  return (
    <MainBox>
      <h2>choose your NFT Hero</h2>
      <ContentLayOut>
        <div>d</div>
        <div>s</div>
      </ContentLayOut>
    </MainBox>
  );
};

export default SecondContainerLayOut;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: -10px;

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 50px;
    color: #ffffff;
  }
`;

const ContentLayOut = styled.div`
  display: flex;
  justify-content: between-around;
`;
