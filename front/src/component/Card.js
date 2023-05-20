import { Col, Divider, Row } from "antd";
import React from "react";
import { styled } from "styled-components";
import { One, Two, Three, Four, Five, Six } from "../img/Index";

const Card = ({ picture }) => {
  return (
    <StyledCol className="gutter-row" span={7}>
      <div>
        <img
          src={picture}
          alt="1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "295px",
          }}
        />
      </div>
      <ContextBox>
        <Title>ROCKY</Title>
        <ContentText>He is a righteous fighter</ContentText>
        <ContentText2>
          muscular Italian-American who grew up in a poor neighborhood in
          Philadelphia. He harbored dreams of becoming a boxer...
        </ContentText2>
      </ContextBox>
    </StyledCol>
  );
};

export default Card;

const StyledCol = styled(Col)`
  width: 376px;
  height: 496px;
  margin: 10px;
`;

const styles = {
  width: "100%",
  height: "276px",
  color: "white",
  backgroundColor: "white",
};

const ContextBox = styled.div`
  width: 100%;
  height: 276px;
  color: white;

  box-sizing: border-box;

  position: absolute;

  height: 261px;
  top: 270px;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) -20.36%, #8d358e 51.7%);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 5px;
`;

const Title = styled.div`
  font-family: "K2D";
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */

  color: #ffffff;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const ContentText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
`;

const ContentText2 = styled.div`
  width: 100%;
  height: 64px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;

  leading-trim: both;
  text-edge: cap;

  color: rgba(255, 255, 255, 0.6);
`;