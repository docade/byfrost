import React from "react";
import { styled } from "styled-components";

const Explanation = () => {
  return (
    <ExplanationBox>
      <Title>The First AI-Powered Web3 Operating System </Title>
      <Contents>
        As the first AI-Powered Web3 Operating System, Lucy can answer your
        questions about the crypto world and help you utilize all kinds of
        permissionless on-chain products through natural language. Very soon,
        Lucy will onboard the next hundred million users into the crypto world.
      </Contents>
      <Button>Get Start</Button>
    </ExplanationBox>
  );
};

export default Explanation;

const ExplanationBox = styled.div`
  width: 678px;
  height: 140px;
  padding: 44px;
  color: #ffffff;
  z-index: 1;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.2px;
  text-transform: capitalize;
`;

const Contents = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  text-transform: capitalize;

  /* systemGrey/600 */

  color: #757575;
`;

const Button = styled.button`
  width: 468px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 70px;
  gap: 10px;
  background: linear-gradient(
    180deg,
    #efaa9e 0%,
    rgba(250, 14, 226, 0.697917) 30.21%,
    rgba(242, 12, 219, 0.75) 79.17%,
    rgba(237, 98, 223, 0) 100%
  );
`;
