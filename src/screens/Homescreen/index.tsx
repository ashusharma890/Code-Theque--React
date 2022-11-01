import React, { useContext } from "react";
import styled from "styled-components";
import Modal from "../../components/Modal";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import { ModalContext } from "../../context/ModalContext";

const HomeScreenSection = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1.5fr;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const HomeScreen = () => {
  const ModalFeatures = useContext(ModalContext)!;
  const isOpen = ModalFeatures.isOpen;

  return (
    <HomeScreenSection>
      <LeftPane />
      <RightPane />
      {isOpen.value === true ? <Modal /> : <></>}
    </HomeScreenSection>
  );
};

export default HomeScreen;
