import React from "react";
import Card from "../Card";
import { styled } from "styled-components";
import { Col, Row } from "antd";
import { One, Two, Three, Four, Five, Six } from "../../img/Index";

const SecondContainerLayOut = () => {
  return (
    <MainBox>
      <StyledRow className="CardRow" gutter={[0, 150]}>
        {dummy.map((data) => {
          return (
            <Card
              picture={data.picture}
              name={data.name}
              script={data.script}
              text={data.text}
            />
          );
        })}
      </StyledRow>
    </MainBox>
  );
};

export default SecondContainerLayOut;

const dummy = [
  {
    picture: One,
    name: "ROCKY",
    script: "He's a righteous fighter",
    text: "muscular Italian-American who grew up in a poor neighborhood in Philadelphia. He harbored dreams of becoming a boxer...",
  },
  {
    picture: Two,
    name: "PANI",
    script: "He's a boxer with a sad story",
    text: "He tried to cover his wounds with fighting, but his insides never healed. He carried scars from violence at home and the breakdown of his family, and they haunted him, turning his life upside down.",
  },
  {
    picture: Three,
    name: "CHAHOPE",
    script: "his story is a legend that inspires those...",
    text: "But Chakhov's story wasn't just a boxing success story; he also used boxing to explore his inner self, to confront his own weaknesses and pain. He went through a journey of self-discovery, confronting past hurts and internal darkness.",
  },
  {
    picture: Four,
    name: "BLUEB",
    script: "He was a source of comfort and courage...",
    text: "He meets an important connection in his life. A woman comes into his life and truly understands him. Her support and love brings new hope to Bluebeard, easing his depression a bit. But the happiness is short-lived.",
  },
  {
    picture: Five,
    name: "NIBI",
    script: "Nibi is an aspiring fighter known as...",
    text: "He saw an opportunity to change his destiny. He had given up boxing for a long time, working as a construction worker, but his desire never faded. Then he met his new training partners, who passed on their experience and knowledge to him, giving him a chance to get back on his feet and fulfill his dreams.",
  },
  {
    picture: Six,
    name: "STEVEN",
    script: "Steve is a gifted boxer who is missing one...",
    text: "lost an arm in a childhood accident, but his passion and courage pushed him forward despite this obstacle. He didn't let the loss of his hand stop him from living his life and developed a passion for boxing.",
  },
];

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

const StyledRow = styled(Row)`
  width: 1040px;
`;
