import React from "react";
import styled from "styled-components";
import { BiExport } from "react-icons/bi";

const OuterBox = styled.div`
  background: var(--body);
  display: flex;
  flex-direction: column;
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

const OutputArea = styled.textarea`
  background: var(--body);
  flex-grow: 1;
  resize: none;
  padding: 0.25rem;
  padding-top: 0.5rem;
  font-size: 1.1rem;
  font-style: italic;
`;

interface OutputConsoleProps {
  currentOutput: string;
}

const OutputConsole: React.FC<OutputConsoleProps> = ({ currentOutput }) => {
  const exportUserOutput = () => {
    const fileData = JSON.stringify(currentOutput);
    // const jsonToTxt = require("json-to-txt");
    // const dataInString = jsonToTxt({ data: fileData  });
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "output.json";
    link.href = url;
    link.click();
  };

  return (
    <OuterBox>
      <InnerBox>
        Output:
        <button onClick={exportUserOutput}>
          <BiExport />
          Export Output
        </button>
      </InnerBox>
      <OutputArea value={currentOutput} disabled></OutputArea>
    </OuterBox>
  );
};

export default OutputConsole;
