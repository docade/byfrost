import { Button, Layout, Menu, Space } from "antd";
import styled from "styled-components";
import discord from "../../img/discord.png";

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout = ({ children }) => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>
        <FirstBox>
          <Logo>EGG BREAKER</Logo>
          <StyledMenu>
            <StyledMenuItem1></StyledMenuItem1>
            <StyledMenuItem2></StyledMenuItem2>
            <StyledMenuItem3></StyledMenuItem3>
          </StyledMenu>
        </FirstBox>
        <SecondBox>
          <DiscordIcon>
            <img
              src={discord}
              alt="discord"
              style={{ width: "100%", height: "100%" }}
            />
          </DiscordIcon>
          <ConnectWalletButon>ConnectWallet</ConnectWalletButon>
        </SecondBox>
      </Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Space>
);
export default BasicLayout;

const Logo = styled.div`
  width: 230px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ff00e6;
`;

const headerStyle = {
  color: "#fff",
  height: "71px",
  backgroundColor: "#000000",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const contentStyle = {
  padding: "20px 50px",
  minHeight: 120,
  color: "#fff",
  backgroundColor: "black",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const StyledMenu = styled(Menu)`
  display: flex;
  flex-direction: row;
  item-align: center;
  justify-content: center;
  text-align: center;
  background-color: #000000;
  height: 100%;
`;

const StyledMenuItem1 = styled(Menu.Item)`
  width: 36px;
  height: 36px;

  background: #e53935;
  box-shadow: inset 0px 4px 22px 4px rgba(0, 0, 0, 0.43);
  border-radius: 30px;

  order: 1;
  flex-grow: 0;
`;
const StyledMenuItem2 = styled(Menu.Item)`
  width: 36px;
  height: 36px;

  background: #3563e9;
  box-shadow: inset 0px 4px 22px 4px rgba(0, 0, 0, 0.43);
  border-radius: 30px;

  order: 2;
  flex-grow: 0;
`;
const StyledMenuItem3 = styled(Menu.Item)`
  width: 36px;
  height: 36px;

  background: #ffe500;
  box-shadow: inset 0px 4px 22px 4px rgba(0, 0, 0, 0.43);
  border-radius: 30px;

  order: 3;
  flex-grow: 0;
`;

const FirstBox = styled.div`
  display: flex;
`;

const SecondBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 200px;
  height: 100%;
  border: 1px solid red;
`;

const DiscordIcon = styled.div``;

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
