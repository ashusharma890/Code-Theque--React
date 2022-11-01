import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import styled from "styled-components";
import {
  BiImport,
  BiExport,
  BiFullscreen,
  BiEdit,
  BiEditAlt,
} from "react-icons/bi";
import Select from "react-select";

const EditorBox = styled.div`
  display: flex;
  flex-direction: column; ;
`;

const UpperToolBar = styled.div`
  background: white;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    font-size: 1.3rem;
  }

  button {
    background: transparent;
    font-size: 1.3rem;
    border: 0;
    outline: 0;

    svg {
      font-size: 1.5rem;
    }
  }
`;

const DropDowns = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  // width: 15rem;

  & > div:nth-of-type(1) {
    width: 10rem;
  }

  & > div:nth-of-type(2) {
    width: 11rem;
  }
`;

const LowerToolBar = styled.div`
  background: white;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  button {
    background: transparent;
    outline: 0;
    border: 0;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      font-size: 1.4rem;
    }
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const SubmitBtn = styled.button`
  padding: 0.8rem 2rem;
  background-color: #0097d7 !important;
  color: white;
  font-weight: 700;
  cursor: pointer;
  border-radius: 2rem;
`;

const EditorContainer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const languageOptions = [
    { value: "c++", label: " C++" },
    { value: "java", label: " Java" },
    { value: "python", label: " Python" },
    { value: "javascript", label: " Javascript" },
  ];

  const themeOptions = [
    { value: "dracula", label: " Dracula" },
    { value: "okaidia", label: " Okaidia" },
    { value: "bespin", label: " Bespin" },
    { value: "duotoneLight", label: " DuotoneLight" },
    { value: "duotoneDark", label: " DuotoneDark" },
    { value: "githubLight", label: " GithubLight" },
    { value: "githubDark", label: " GithubDark" },
    { value: "xcodeDark", label: " XcodeDark" },
    { value: "xcodeLight", label: " XcodeLight" },
  ];

  const handleChangeLanguage = (selectedOption: any) => {
    setSelectedLanguage(selectedOption);
  };

  const handleChangeTheme = (selectedTheme: any) => {
    setSelectedTheme(selectedTheme);
  };

  return (
    <EditorBox>
      <UpperToolBar>
        <Title>
          <h3>Stack implementation</h3>
          <button>
            <BiEditAlt />
          </button>
        </Title>
        <DropDowns>
          <Select
            value={selectedLanguage}
            onChange={handleChangeLanguage}
            options={languageOptions}
          />
          <Select
            value={selectedTheme}
            onChange={handleChangeTheme}
            options={themeOptions}
          />
        </DropDowns>
      </UpperToolBar>

      <CodeEditor />

      <LowerToolBar>
        <Button>
          <button>
            <BiFullscreen />
            Full Screen
          </button>
          <button>
            <BiImport />
            Import Code
          </button>
          <button>
            <BiExport />
            Export Code
          </button>
        </Button>
        <SubmitBtn>Run Code</SubmitBtn>
      </LowerToolBar>
    </EditorBox>
  );
};

export default EditorContainer;
