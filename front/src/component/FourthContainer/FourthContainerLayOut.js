import React from "react";
import { styled } from "styled-components";
import { Background } from "../../img/Index";

const FourthContainerLayOut = () => {
  return (
    <MainBox >
      <ImageBox>
        <h2 className="test">PLAY YOUR NFT HERO</h2>
        <p>Let's take the road to love and Romantic together</p>
        <SButton>Play</SButton>
      </ImageBox>
    </MainBox>
  );
};

export default FourthContainerLayOut;

const MainBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  position: relative;

  

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

const SButton = styled.button`
  color: white;

width: 167px;
height: 35px;

background: linear-gradient(
  180deg,
  #efaa9e 0%,
  rgba(250, 14, 226, 0.697917) 30.21%,
  rgba(242, 12, 219, 0.75) 79.17%,
  rgba(237, 98, 223, 0) 100%
);
border-radius: 5px;
  `;