import React from "react";
import styled from "styled-components";
import { BiImport } from "react-icons/bi";

const OuterBox = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const InnerBox = styled.div`
  height: 4rem;
  background: #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 700;

  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1rem;
    font-weight: 400;
    border: 0;
    outline: 0;
    background: transparent;
    transition: all 0.1s ease;

    svg {
      font-size: 1.5rem;
    }

    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`;

const StyledTextArea = styled.textarea`
  flex-grow: 1;
  // display: none;
  resize: none;
  border: 0;
  outline: 0;
  font-size: 1.1rem;
  padding: 0.5rem;
  padding-top: 0.5rem;
`;

const InputConsole = () => {
  return (
    <OuterBox>
      <InnerBox>
        Input:{" "}
        <button>
          <BiImport />
          Import Input
        </button>
      </InnerBox>
      <StyledTextArea></StyledTextArea>
    </OuterBox>
  );
};

export default InputConsole;
