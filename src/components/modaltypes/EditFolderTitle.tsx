import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { CloseBtn, ModalProps } from "../Modal";

const EditFolderTitle = ({ closeModal, identifier }: ModalProps) => {
  return (
    <div>
      EditFolderTitle
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

export default EditFolderTitle;
