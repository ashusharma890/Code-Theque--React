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
  }

  button {
    padding: 0 2rem;
    background: #39c395;
    height: 2rem;
    color: white;
  }
`;

const NewCard = ({ closeModal, identifier }: ModalProps) => {
  const { folderId } = identifier;

  const { folders, createNewPlayground } = useContext(PlaygroundContext)!;

  const languages = [
    { value: "c++", label: " C++" },
    { value: "java", label: " Java" },
    { value: "python", label: " Python" },
    { value: "javascript", label: " Javascript" },
  ];
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState(languages[0]);

  const handleChangeLanguage = (selectedOption: any) => {
    setLanguage(selectedOption);
  };
  return (
    <div>
      <Header>
        <h2>Create New Playground</h2>
        <CloseBtn
          onClick={() => {
            closeModal();
          }}
        >
          <RiCloseFill />
        </CloseBtn>
      </Header>
      <InputWithSelect>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Select
          options={languages}
          value={language}
          onChange={handleChangeLanguage}
        />
        <button
          onClick={() => {
            createNewPlayground(folderId, title, language.value);
            closeModal();
          }}
        >
          Create New Playground
        </button>
      </InputWithSelect>
    </div>
  );
};

export default NewCard;
