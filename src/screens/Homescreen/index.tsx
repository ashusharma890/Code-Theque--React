import React from "react";
import styled from "styled-components";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const HomeScreenSection = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1.5fr;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const HomeScreen = () => {
  return (
    <HomeScreenSection>
      <LeftPane />
      <RightPane />
    </HomeScreenSection>
  );
};

export default HomeScreen;
