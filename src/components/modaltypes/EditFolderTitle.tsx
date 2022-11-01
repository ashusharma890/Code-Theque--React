import { useState, useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { CloseBtn, Header, Input, ModalProps } from "../Modal";

const EditFolderTitle = ({ closeModal, identifier }: ModalProps) => {
  const { folderId, cardId } = identifier;

  const { folders, editFolderTitle } = useContext(PlaygroundContext)!;
  const [title, setTitle] = useState(folders[folderId].title as string);
  return (
    <div>
      <Header>
        <h2>Edit Folder Title</h2>
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
            editFolderTitle(folderId, title);
            closeModal();
          }}
        >
          Update Title
        </button>
      </Input>
    </div>
  );
};

export default EditFolderTitle;
