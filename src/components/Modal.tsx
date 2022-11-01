import React, { useContext } from "react";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";
import { ModalContext } from "../context/ModalContext";
import { PlaygroundContext } from "../context/PlaygroundContext";
import EditCardTitle from "./modaltypes/EditCardTitle";
import EditFolderTitle from "./modaltypes/EditFolderTitle";
import NewCard from "./modaltypes/NewCard";
import NewFolder from "./modaltypes/NewFolder";

export const ModalDiv = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 115vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  background: white;
  width: 35%;
  padding: 2rem;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 2rem;
  padding-bottom: 0;

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

const EditModal = ({
  closeModal,
  isOpen,
}: {
  closeModal: () => void;
  isOpen: any;
}) => {
  const PlaygroundFeatures = useContext(PlaygroundContext)!;
  const folders = PlaygroundFeatures.folders;

  const currentFolder = folders[isOpen.identifier.folderId];
  const currentCard = currentFolder.items[isOpen.identifier.cardId];

  return (
    <>
      <Header>
        <h2 className="heading">Edit Card Title</h2>
        <CloseBtn
          onClick={() => {
            closeModal();
          }}
        >
          <RiCloseFill />
        </CloseBtn>
      </Header>
      <Input>
        <input type="text" value={currentCard.title} />
        <button>Update Title</button>
      </Input>
    </>
  );
};

export interface ModalProps {
  closeModal: () => void;
  identifier: {
    folderId: string;
    cardId: string;
  };
}

const Modal = () => {
  const ModalFeatures = useContext(ModalContext)!;
  const { closeModal } = ModalFeatures;
  const isOpen = ModalFeatures.isOpen;

  return (
    <ModalDiv>
      <ModalBox>
        {isOpen.type === "1" && (
          <EditCardTitle
            closeModal={closeModal}
            identifier={isOpen.identifier}
          />
        )}
        {isOpen.type === "2" && (
          <EditFolderTitle
            closeModal={closeModal}
            identifier={isOpen.identifier}
          />
        )}
        {isOpen.type === "3" && (
          <NewCard closeModal={closeModal} identifier={isOpen.identifier} />
        )}
        {isOpen.type === "4" && (
          <NewFolder closeModal={closeModal} identifier={isOpen.identifier} />
        )}
      </ModalBox>
    </ModalDiv>
  );
};

export default Modal;
