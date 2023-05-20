import { Button, Dropdown } from "antd";
import { styled } from "styled-components";
import { Image } from '@chakra-ui/react'
import { useEffect, useState } from "react";
const items = [
  {
    key: "1",
    label: <Image
      width={150} 
      height={150} 
      src={'https://gateway.pinata.cloud/ipfs/QmbuWsv5M36bRgvSvWiaU2svBjCPayTaaMJJrvg6dddVw3/3.png'}
    />,
  },
  // {
  //   key: "2",
  //   label: <div style={{ width: "100px" }}>2nd asadfnfjn item</div>,
  // },
  // {
  //   key: "3",
  //   label: <div style={{ width: "100px" }}>3th asadfnfjn item</div>,
  // },
];

// const [account, setAccount] = useState(null)

// const getAccount = async() => {
//   try {
//       if(window.biport) {
//       const accounts = await window.biport.request({
//           method: "eth_requestAccounts"
//       })
//       setAccount(accounts[0]);
//       } else {
//       alert("install metamask")
//       }
//   } catch(error) {
//       console.log(error)
//   }
// }

// useEffect(() => {

// },[])

const DropDown = ({ title }) => (
  <>
    { !window.biport ?
    <ButtonTest>{title}</ButtonTest>
    :
    <DropBox
      menu={{
        items,
      }}
      placement="bottom"
      arrow={{
        pointAtCenter: true,
      }}
      width="300px"
    >
      <ConnectWalletButon>
        <div>Wallet Connet</div>
      </ConnectWalletButon>
    </DropBox>
    }
  </>
);
export default DropDown;

const DropItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const DropBox = styled(Dropdown)`
  width: 600px;
`;

const ButtonTest = styled(Button)`
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

const ConnectWalletButon = styled(Button)`
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
