import React from "react";
import { styled } from "styled-components";
import DetailText from "./DetailText";
import DetailCard from "./DetailCard";
import Card from "./DetailCard";
import { Tree, Qestion } from "../../img/Index";

const SecondContainerLayOut = () => {
  return (
    <MainBox>
      <h2>choose your NFT Hero</h2>
      <ContentLayOut>
        <DetailText />
        <StyleCard
          picture={dummy[0].picture}
          name={dummy[0].name}
          script={dummy[0].script}
          text={dummy[0].text}
        />
      </ContentLayOut>
    </MainBox>
  );
};

export default SecondContainerLayOut;

const dummy = [
  {
    picture: Tree,
    name: "UNIQUE",
    script: "?????",
    text: "Prompt writing involves crafting clear and engaging prompts, while using images to create a visual representation of the idea or concept.",
  },
];

const MainBox = styled.div`
  position: relative;
  top: -10px;
  font-family: "Press Start 2P";

  h2 {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 50px;
    color: #ffffff;
  }
`;

const ContentLayOut = styled.div`
  display: flex;
  height: 600px;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  //   justify-content: space-around;
  align-items: center;
`;

const StyleCard = styled(Card)`
  width: 420px;
  transform: scale(1.25);
`;
