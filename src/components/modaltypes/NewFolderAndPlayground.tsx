import { useState, useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import Select from "react-select";
import styled from "styled-components";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { CloseBtn, Header, Input, ModalProps } from "../Modal";

const InputWithSelect = styled.div`
  display: grid;
  grid-template-column: 1fr 0.5fr;
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 1.2rem;
  align- items: center;

  input {
    flex-grow: 1;
    height: 2rem;
    background: var(--body) !important;
  }

  button {
    padding: 0 2rem;
    background: #39c395;
    height: 2rem;
    color: white;
  }
`;

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    // borderBottom: "1px dotted pink",
    background: state.isSelected ? "#0097d7" : "var(--body)",
    color: state.isSelected ? "white" : "var(--color)",
    // padding: 20,
  }),
  singleValue: (provided: any, state: any) => {
    // const opacity = state.isDisabled ? 0.5 : 1;
    // const transition = 'opacity 300ms';

    return { ...provided };
  },
};

const NewFolderAndPlayground = ({ closeModal, identifier }: ModalProps) => {
  const { folderId } = identifier;

  const { createNewFolderAndPlayground } = useContext(PlaygroundContext)!;

  const languages = [
    { value: "c++", label: " C++" },
    { value: "java", label: " Java" },
    { value: "python", label: " Python" },
    { value: "javascript", label: " Javascript" },
  ];
  const [folderTitle, setFolderTitle] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [language, setLanguage] = useState(languages[0]);

  const handleChangeLanguage = (selectedOption: any) => {
    setLanguage(selectedOption);
  };
  return (
    <div>
      <Header>
        <h2>Create New Folder and Playground</h2>
        <CloseBtn
          onClick={() => {
            closeModal();
          }}
        >
          <RiCloseFill />
        </CloseBtn>
      </Header>
      <InputWithSelect>
        <label>Enter Folder Name</label>
        <input
          type="text"
          value={folderTitle}
          onChange={(e) => {
            setFolderTitle(e.target.value);
          }}
        />

        <label>Enter Card Name</label>
        <input
          type="text"
          value={cardTitle}
          onChange={(e) => {
            setCardTitle(e.target.value);
          }}
        />

        <Select
          options={languages}
          value={language}
          onChange={handleChangeLanguage}
          styles={customStyles}
        />

        <button
          onClick={() => {
            createNewFolderAndPlayground(
              folderTitle,
              cardTitle,
              language.value
            );
            closeModal();
          }}
        >
          Create New Playground
        </button>
      </InputWithSelect>
    </div>
  );
};

export default NewFolderAndPlayground;
