import React, { useState, useContext } from "react";
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
import { ModalContext } from "../../context/ModalContext";
import { languageMap } from "../../context/PlaygroundContext";

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

  button,
  label {
    background: transparent;
    outline: 0;
    border: 0;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

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
  background-color: #39c395 !important;
  color: white;
  font-weight: 700;
  cursor: pointer;
  border-radius: 2rem;
`;

const SaveBtn = styled.button`
  padding: 0.4rem 1rem;
  background-color: #0097d7 !important;
  color: white;
  font-weight: 700;
  cursor: pointer;
  border-radius: 2rem;
  border: 0;
`;

interface EditorContainerProps {
  title: string;
  language: string;
  code: string;
  setCurrentLanguage: (newLang: string) => void;
  setCurrentCode: (newCode: string) => void;
  folderId: string;
  cardId: string;
  saveCode: () => void;
  runCode: () => void;
}

const EditorContainer: React.FC<EditorContainerProps> = ({
  title,
  language,
  code,
  setCurrentCode,
  setCurrentLanguage,
  folderId,
  cardId,
  saveCode,
  runCode,
}) => {
  const { openModal } = useContext(ModalContext)!;

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

  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    for (let i = 0; i < languageOptions.length; i++) {
      if (languageOptions[i].value === language) return languageOptions[i];
    }

    return languageOptions[0];
  });
  const [selectedTheme, setSelectedTheme] = useState({
    value: "dracula",
    label: " Dracula",
  });

  const handleChangeLanguage = (selectedOption: any) => {
    setSelectedLanguage(selectedOption);
    setCurrentLanguage(selectedOption.value);
    setCurrentCode(languageMap[selectedOption.value].defaultCode);
  };

  const handleChangeTheme = (selectedTheme: any) => {
    setSelectedTheme(selectedTheme);
  };

  const getFile = (e: any) => {
    const input = e.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0]);
    }
  };

  const placeFileContent = (file: any) => {
    readFileContent(file)
      .then((content) => {
        setCurrentCode(content as string);
        // console.log(content);
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
    <EditorBox>
      <UpperToolBar>
        <Title>
          <h3>{title}</h3>
          <button
            onClick={() => {
              openModal({
                value: true,
                type: "1",
                identifier: {
                  folderId: folderId,
                  cardId: cardId,
                },
              });
            }}
          >
            <BiEditAlt />
          </button>
        </Title>
        <DropDowns>
          <SaveBtn
            onClick={() => {
              saveCode();
            }}
          >
            Save Code
          </SaveBtn>
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

      <CodeEditor
        currentLanguage={selectedLanguage.value}
        currentTheme={selectedTheme.value}
        currentCode={code}
        setCurrentCode={setCurrentCode}
      />

      <LowerToolBar>
        <Button>
          <button>
            <BiFullscreen />
            Full Screen
          </button>
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
            Import Code
          </label>
          <button>
            <BiExport />
            Export Code
          </button>
        </Button>
        <SubmitBtn
          onClick={() => {
            runCode();
          }}
        >
          Run Code
        </SubmitBtn>
      </LowerToolBar>
    </EditorBox>
  );
};

export default EditorContainer;
