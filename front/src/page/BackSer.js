import React from "react";
import { styled } from "styled-components";
import VideoPlayer from "../component/Video";

const BackSer = () => {
  return (
    <BackSetLayOut>
      <VedioBox>
        <VideoPlayer />
      </VedioBox>

      <Container>
        <Title> what is EGG BREAKER ?</Title>
        <TitleContent>
          EGG BREAKER is our team name and the name of our game. The metaphor of
          the egg comes from Hermann Hesse Damian: 'The bird is trying to get
          out of the egg. An egg is a world. The one who is born must destroy a
          world." The value we extracted from that sentence is active
          self-improvement. Our motto is to challenge ourselves to grow and
          achieve even when we are broken and shattered, to break our own
          limits, and to inspire and help those around us to make the world a
          little better. Our motto extends to our games. The act of fighting is
          not what it seems. It's not just a physical struggle, it's a conscious
          and unconscious It's a self-expression, and when you get down to it,
          it's a struggle against yourself, not others, and that's why fighting
          is so important to your character. Each fights for what they believe
          in. It's a game, and it's a slice of life.
        </TitleContent>
        <SubTitle>[ EGG BREAKER ] White Paper</SubTitle>
        <SubConent>
          EGG BREAKER is a game inspired by retro fighting games. It is an
          NFT-based game that allows players to collect, trade, and hone their
          fighters' skills. The game will be released on the bifrost network. In
          EGG BREAKER, players will be able to hone their skills step by step
          through the training of their purchased fighters. The game concept
          design and gameplay will be a nostalgic throwback to the past, a
          playground at sunset where you can reminisce about your childhood
          while spending coins in the WEB3 ecosystem. This means that there is a
          huge potential to increase the value of NFTs for their owners.
        </SubConent>
      </Container>
    </BackSetLayOut>
  );
};

export default BackSer;

const BackSetLayOut = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const VedioBox = styled.div`
  width: 662px;
  height: 440px;

  background-color: black;
  position: relative;
  align-items: center;
  top: -200px;
  left: -50px;
  //   z-index: 1;
  // margin-top: 200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 952px;

  gap: 24px;
`;

const Title = styled.div`
  font-family: "DotGothic16";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: capitalize;

  /* systemGrey/0 */

  color: #ffffff;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  height: 58px;

  /* Linear */

  background: linear-gradient(
    180deg,
    #efaa9e 0%,
    rgba(250, 14, 226, 0.697917) 30.21%,
    rgba(242, 12, 219, 0.75) 79.17%,
    rgba(237, 98, 223, 0) 100%
  );
`;

const TitleContent = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: capitalize;

  color: #eff3fd;
`;

const SubTitle = styled.div`
  font-family: "DotGothic16";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  /* identical to box height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;

  position: relative;
  width: 952px;
  height: 58px;

  /* Linear */

  background: linear-gradient(
    180deg,
    #efaa9e 0%,
    rgba(250, 14, 226, 0.697917) 30.21%,
    rgba(242, 12, 219, 0.75) 79.17%,
    rgba(237, 98, 223, 0) 100%
  );

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: capitalize;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SubConent = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  text-transform: capitalize;

  color: #ffffff;
`;
