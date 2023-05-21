import React from "react";
import { WsV2 } from "chainrunner-sdk";
import BigNumber from "bignumber.js";
import { styled } from "styled-components";
import { mint } from "../wallet/NFTminting";

const DetailText = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const client = new WsV2(
    "wss://api.glitch.chainrunner.io",
    window.biport,
    "GLITCH/KOREA",
    apiKey
  );

  const buyApi = async () => {
    const response = await client.call(
      "Glitch.run.buy",
      undefined,
      "bifswap",
      [
        "0x28661511CDA7119B2185c647F23106a637CC074f", // usdc로 bfc 구매
        "0x1745F24d85192545E5eD1c9574782d067D3Fda09",
        "0x0000000000000000000000000000000000000000",
      ],
      BigNumber(0.905),
      BigNumber(14.812240365718454),
      BigNumber(0xbfc0),
      BigNumber(0.5)
    );

    console.log(response.result);
    await mint();
  };

  // buyApi();

  const bridgeApi = async () => {
    const response = await client.call(
      "Glitch.run.bridge",
      undefined,
      "bifrostBridge",
      "0xC9C0aD3179eE2f4801454926ED5D6A2Da30b56FB",
      BigNumber(1),
      BigNumber(0x61),
      BigNumber(0xbfc0)
    );

    console.log(response.result);
  };

  const bridgeAndBuyApi = async () => {
    await bridgeApi();
    await window.biport.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xbfc0" }],
    });

    await buyApi();
  };

  const checkAndBridge = async () => {
    const chainId = await window.biport.request({ method: "eth_chainId" });
    if (chainId != "0x61") {
      await window.biport.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x61" }],
      });
    }
    bridgeAndBuyApi();
  };

  const test = async () => {
    await checkAndBridge();
  };

  return (
    <DetailTextBox>
      <Title>Meet a random hero or invite your NFT character to be hero.  </Title>

      <Content>
        If you don't have your own NFT, get our nfts living on bifrost chain. You can directly mint 
        NFT with variable tokens on multichains without exchanging them through DEXs or CEXs beforehand.
      </Content>
      <ButtonMinting onClick={checkAndBridge}>
        <p>Minting</p>
      </ButtonMinting>
    </DetailTextBox>
  );
};

export default DetailText;

const DetailTextBox = styled.div`
  margin-top: 50px;
  width: 422px;
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

  margin-bottom: 20px;

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
