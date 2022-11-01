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

  span{
    display: flex;
    align-items: cneter'
    gap: 0.4rem;
    font-size: 1rem;
    font-weight: 400;
    
    svg{
      font-size: 1.5rem;
    }
  }
`;

const TextArea = styled.textarea`
  flex-grow: 1;
  resize: none;
  border: 0;
  outline: 0;
  font-size: 1.1rem;
`;

const InputConsole = () => {
  return (
    <OuterBox>
      <InnerBox>
        Input:{" "}
        <span>
          <BiImport />
          Import Input
        </span>{" "}
      </InnerBox>
      <TextArea></TextArea>
    </OuterBox>
  );
};

export default InputConsole;
