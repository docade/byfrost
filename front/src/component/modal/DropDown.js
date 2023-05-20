import { Button, Dropdown } from "antd";
import { styled } from "styled-components";
const items = [
  {
    key: "1",
    label: <div>2nd asadfnfjn item</div>,
  },
  {
    key: "2",
    label: <div style={{ width: "100px" }}>2nd asadfnfjn item</div>,
  },
  {
    key: "3",
    label: <div style={{ width: "100px" }}>2nd asadfnfjn item</div>,
  },
];
const DropDown = ({ children, title }) => (
  <>
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
        <div>{title}</div>
      </ConnectWalletButon>
    </DropBox>
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
