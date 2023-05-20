import React from "react";
import { styled } from "styled-components";
import { Background } from "../../img/Index";
import PlayButton from "../pixelstreaming/PlayButton";

const FourthContainerLayOut = () => {
  return (
    <MainBox>
      <ImageBox>
        <h2 className="test">PLAY YOUR NFT HERO</h2>
        <p>Let's take the road to love and Romantic together</p>
        <PlayButton />
      </ImageBox>
    </MainBox>
  );
};

export default FourthContainerLayOut;

const MainBox = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 200px;

  p {
    font-size: 20px;
  }
`;

const ImageBox = styled.div`
  background-image: url(${Background});
  background-size: cover;
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  position: relative;

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 50px;
    color: #ffffff;
  }
`;
