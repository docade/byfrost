import { useEffect } from "react";
import { styled } from "styled-components";

function PlayButton() {

  let account = ""
  
  const getAccount = async () => {
    window.biport.request({ method: 'eth_accounts' })
    .then((accounts) => {
      [account] = accounts
      //console.log(account)
    }).catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Please connect to Biport.');
      } else {
        console.error(error);
      }
    });
  }

  const sendBFC = async () => {

    const decValue = 100*10**18;

    const params = [
      {
        from: account,
        to: '0xeb837ba978c1437791a29a2e05bd5a38887ab0b5',
        gas: '0x76c0', // 30400
        gasPrice: '0x9184e72a000', // 10000000000000
        value:  decValue.toString(16) , // 100
      },
    ];

    window.biport
    .request({
      method: 'eth_sendTransaction',
      params,
    })
    .then((result) => {
      // The result varies by RPC method.
      // For example, this method returns a transaction hash hexadecimal string upon success.
      console.log(result)
      window.open("http://localhost:3000/game","_blank")
    })
    .catch((error) => {
      // If the request fails, the Promise rejects with an error.
    });
  }


    const onClickPlay = ()=> {
      sendBFC()
    }

    useEffect(()=>{
      getAccount()  
    })
    
    return (
      <SButton onClick={onClickPlay}>
        Play
      </SButton>
    );
  }
  
  export default PlayButton;

  const SButton = styled.button`
  color: white;

width: 167px;
height: 35px;

background: linear-gradient(
  180deg,
  #efaa9e 0%,
  rgba(250, 14, 226, 0.697917) 30.21%,
  rgba(242, 12, 219, 0.75) 79.17%,
  rgba(237, 98, 223, 0) 100%
);
border-radius: 5px;
  `;