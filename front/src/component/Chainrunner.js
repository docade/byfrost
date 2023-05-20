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
      // checkAndBridge();
    },[])
  
    
    return (
      <button >
        bnb to bfc
      </button>
    );
  }
  
  export default Chainrunner;