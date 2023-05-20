import { Col, Divider, Row } from "antd";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { One, Two, Three, Four, Five, Six, Qestion } from "../../img/Index";

const Card = ({ picture, name, script, text }) => {
  const [data, setData] = useState(null);

  return (
    <StyledCol className="gutter-row">
      <div>
        <img
          src={picture}
          alt="1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "377px",
            height: "324px",
            borderRadius: "20px",
          }}
        />
        <img
          src={Qestion}
          alt="1"
          style={{
            position: "absolute",
            top: 20,
            left: 100,
            width: "50%",
            height: "50%",
            zIndex: 2,
          }}
        />
      </div>
      <ContextBox>
        <Title>{name ? name : ""}</Title>
        <hr />
        <ContentText>{script ? script : ""}</ContentText>
        <ContentText2>{text ? text : ""}</ContentText2>
      </ContextBox>
    </StyledCol>
  );
};

export default Card;

const StyledCol = styled(Col)`
  width: 377px;
  height: 496px;

  transform: scale(1);
`;

const ContextBox = styled.div`
  width: 377px;
  height: 276px;
  color: white;
  padding: 20px;

  box-sizing: border-box;

  position: absolute;

  top: 254px;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) -20.36%, #8d358e 51.7%);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 0px 0px 10px 10px;
`;

const Title = styled.div`
  font-family: "Inter";
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
  // height: 64px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;

  leading-trim: both;
  text-edge: cap;

  color: rgba(255, 255, 255, 0.6);
`;
