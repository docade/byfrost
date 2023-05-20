import React from "react";
import { styled } from "styled-components";

const DetailText = () => {
  return (
    <DetailTextBox>
      <Title>Purus id tellus arcu habitant proin magna. Integer purus</Title>

      <Content>
        Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse
        lacus mi commodo elementum.
      </Content>
      <ButtonMinting>
        <p>Minting</p>
      </ButtonMinting>
    </DetailTextBox>
  );
};

export default DetailText;

const DetailTextBox = styled.div`
  width: 429px;
  height: 312px;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  text-transform: capitalize;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Content = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  text-transform: capitalize;

  /* systemGrey/600 */

  color: #757575;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ButtonMinting = styled.button`
  width: 420px;
  height: 42px;
  left: 38px;
  top: 385px;

  /* Linear */

  background: linear-gradient(
    180deg,
    #efaa9e 0%,
    rgba(250, 14, 226, 0.697917) 30.21%,
    rgba(242, 12, 219, 0.75) 79.17%,
    rgba(237, 98, 223, 0) 100%
  );
  p {
    font-family: "DotGothic16";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.46px;
  }
`;
