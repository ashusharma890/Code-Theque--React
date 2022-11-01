import { useState, useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { CloseBtn, Header, Input, ModalProps } from "../Modal";

const NewFolder = ({ closeModal, identifier }: ModalProps) => {
  const { folders, createNewFolder } = useContext(PlaygroundContext)!;
  const [title, setTitle] = useState("");
  return (
    <div>
      <Header>
        <h2>Create New Folder</h2>
        <CloseBtn
          onClick={() => {
            closeModal();
          }}
        >
          <RiCloseFill />
        </CloseBtn>
      </Header>
      <Input>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          onClick={() => {
            createNewFolder(title);
            closeModal();
          }}
        >
          Create Folder
        </button>
      </Input>
    </div>
  );
};

export default NewFolder;
