import React from "react";
import styled from "styled-components";
import { BiImport } from "react-icons/bi";

const OuterBox = styled.div`
  background: var(--body);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const InnerBox = styled.div`
  height: 4rem;
  background: var(--body);
  box-shadow: var(--textbox-shadow);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 700;

  label {
    font-weight: 400;
    gap: 0.4rem;
    transition: all 0.1s ease;

    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
      cursor: pointer;
    }
  }

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
  background: var(--body);
`;

interface InputConsoleProps {
  currentInput: string;
  setCurrentInput: (newInput: string) => void;
}

const InputConsole: React.FC<InputConsoleProps> = ({
  currentInput,
  setCurrentInput,
}) => {
  const getFile = (e: any) => {
    const input = e.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0]);
    }
  };

  const placeFileContent = (file: any) => {
    readFileContent(file)
      .then((content) => {
        setCurrentInput(content as string);
        console.log(content);
      })
      .catch((error) => console.log(error));
  };

  function readFileContent(file: any) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event!.target!.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }
  return (
    <OuterBox>
      <InnerBox>
        Input:{" "}
        <label>
          <input
            type="file"
            accept=".txt"
            style={{ display: "none" }}
            onChange={(e) => {
              getFile(e);
            }}
          />
          <BiImport />
          Import Input
        </label>
      </InnerBox>
      <StyledTextArea
        value={currentInput}
        onChange={(e) => {
          setCurrentInput(e.target.value);
        }}
      ></StyledTextArea>
    </OuterBox>
  );
};

export default InputConsole;
