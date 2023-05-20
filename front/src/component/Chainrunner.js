import { WsV2 } from "chainrunner-sdk";
import BigNumber from "bignumber.js";
import { useEffect } from 'react';

function Chainrunner() {


    const apiKey = "6589cb40-2133-4585-be6a-39fbb7439d6d" // 발급 받은 API Key
    const client = new WsV2(
      "wss://api.glitch.chainrunner.io",
      window.biport,
      "GLITCH/KOREA",
      apiKey
    );
  
    const callApi = async () => {
      const response = await client.call(
        // "Glitch.view.info.DEXs",
        // "Glitch.view.info.bridges",
        "Glitch.view.info.assets",
        undefined,
        // new BigNumber(0xbfc) //main bfc
        // new BigNumber(0xbfc0) //test bf
        new BigNumber(0x61) //bnb test
      );
      console.log(JSON.stringify(response.result, undefined, 2));
    }
  
    // callApi();
  
    const sellApi = async () => {
      const response = await client.call(
        "Glitch.run.sell",
        undefined,
        "bifswap",
        [
          "0x0000000000000000000000000000000000000000",
          "0x1745F24d85192545E5eD1c9574782d067D3Fda09",
          "0x28661511CDA7119B2185c647F23106a637CC074f",
        ],
        BigNumber(100),
        BigNumber(6.11031100000000),
        BigNumber(0xbfc0),
        BigNumber(0.5),
      );
  
      console.log(response.result);
    }
  
  
    const predictAPi = async () => {
  
      // const response = await client.call(
      //   "Glitch.predict.sell",
      //   undefined,
      //   "0x0000000000000000000000000000000000000000",
      //   "0x28661511CDA7119B2185c647F23106a637CC074f",
      //   BigNumber(245.50458063732856),
      //   BigNumber(0xbfc0),
      // );
  
      // // console.log(response.result);
      // console.log(response.result.predictions[0].amountDst);
  
    //   const response = await client.call(
    //     "Glitch.predict.bridgeAndSell",
    //     undefined,
    //     "0x0000000000000000000000000000000000000000",
    //     "0x0000000000000000000000000000000000000000",
    //     BigNumber(0.1),
    //     BigNumber(0x61),
    //     BigNumber(0xbfc0),
    //   );
      
    //   console.log(response.result);
  
    const response = await client.call(
      "Glitch.predict.buy",
      undefined,
      "0x0000000000000000000000000000000000000000",
      "0x28661511CDA7119B2185c647F23106a637CC074f",
      BigNumber(10),
      BigNumber(0xbfc0),
    );
  
    console.log(response.result);
  
    }
  
    // predictAPi();
  
    
    const buyApi = async ()=>{
      
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
        BigNumber(0.5),
      );
      
      console.log(response.result);
    }
  
    // buyApi();
  
    const getBuy = async ()=>{
      const response = await client.call(
        "Glitch.view.DEX.sellResultAmount", //sell amount 하면 sell의 결과 14.81 BFC가 나오고 buy amount는 buy의 결과 0.905 usdc가 나옴
        undefined,
        "bifswap",
        [
          "0x28661511CDA7119B2185c647F23106a637CC074f", //usdc
          "0x1745F24d85192545E5eD1c9574782d067D3Fda09",
          "0x0000000000000000000000000000000000000000",
        ], // path
        BigNumber(0xbfc0),
        "0xef6537adb8a76966ca8a6ce4dff27f9520c0270301cef73422589a4bd0cf0251",
      );
      
      console.log(response.result);
    }
    // getBuy()
  
  const bridgeApi = async () => {
    
    const response = await client.call(
      "Glitch.run.bridge",
      undefined,
      "bifrostBridge",
      "0xC9C0aD3179eE2f4801454926ED5D6A2Da30b56FB",
      BigNumber(1),
      BigNumber(0x61),
      BigNumber(0xbfc0),
    );
    
    console.log(response.result);
  }
  
  const bridgeAndBuyApi = async () => {
    await bridgeApi();
    await window.biport.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0xbfc0' }],
    });
  
    await buyApi();
  }
  
  const checkAndBridge = async () => {
    const chainId = await window.biport.request({ method: 'eth_chainId' })
    if(chainId != "0x61") {
      await window.biport.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x61' }],
      });
    }
    bridgeAndBuyApi();
  }
  
  
    useEffect(() => {
      console.log("render")
      // checkAndBridge();
    },[])
  
    
    return (
      <button >
        bnb to bfc
      </button>
    );
  }
  
  export default Chainrunner;