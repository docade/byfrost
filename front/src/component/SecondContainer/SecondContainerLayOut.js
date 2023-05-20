import React from "react";
import Card from "../Card";
import { styled } from "styled-components";
import { Col, Row } from "antd";
import { One, Two, Three, Four, Five, Six } from "../../img/Index";

const SecondContainerLayOut = () => {
  return (
    <MainBox>
      <h2>choose your NFT Hero</h2>
      <Row className="CardRow" gutter={[0, 20]}>
        <Card picture={One} />
        <Card picture={Two} />
        <Card picture={Three} />
        <Card picture={Four} />
        <Card picture={Five} />
        <Card picture={Six} />
      </Row>
    </MainBox>
  );
};

export default SecondContainerLayOut;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 50px;
    color: #ffffff;
  }
`;

const StyledRow = styled(Row)`
  display: flex
  justify-content: center;
`;
