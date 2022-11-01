import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { CloseBtn, ModalProps } from "../Modal";

const NewFolder = ({ closeModal, identifier }: ModalProps) => {
  return (
    <div>
      NewFolder
      <CloseBtn
        onClick={() => {
          closeModal();
        }}
      >
        <RiCloseFill />
      </CloseBtn>
    </div>
  );
};

export default NewFolder;
