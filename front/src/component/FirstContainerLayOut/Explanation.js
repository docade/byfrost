import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Explanation = () => {
  const navigate = useNavigate();

  return (
    <ExplanationBox>
      <Title style={{marginBottom:"10px"}}> Break the egg </Title>
      <Contents>
      Break the limit of your NFTs. You can rebirth your own NFTs to AI-powered heroes. You can fight against other heroes from multi-blockchain universe.
        Enhance your hero and get amazing rewards!
      </Contents>
      <Button onClick={() => navigate("/backser")}>Get White Paper</Button>
    </ExplanationBox>
  );
};

export default Explanation;

const ExplanationBox = styled.div`
  width: 658px;
  height: 140px;
  padding: 44px;
  color: #ffffff;
  z-index: 1;
  margin-top: 100px;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 39px;
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
