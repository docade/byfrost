import React from "react";
import BasicLayout from "../component/LayOut/BasicLayout";
import { styled } from "styled-components";
import FirstContainer from "../component/FirstContainerLayOut/FirstContainerLayOut";

const MainPage = () => {
  return (
    <BasicLayout>
      <h2>MainPage</h2>
      <FirstContainer />
    </BasicLayout>
  );
};

export default MainPage;
