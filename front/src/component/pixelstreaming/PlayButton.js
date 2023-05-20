import { useEffect } from "react";

function PlayButton() {

  let account = ""
  
  const getAccount = async () => {
    window.biport.request({ method: 'eth_accounts' })
    .then((accounts) => {
      [account] = accounts
      console.log(account)
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
      <button onClick={onClickPlay}>
        play
      </button>
    );
  }
  
  export default PlayButton;