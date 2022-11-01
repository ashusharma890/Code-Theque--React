import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { CloseBtn, ModalProps } from "../Modal";

const EditCardTitle = ({ closeModal, identifier }: ModalProps) => {
  return (
    <div>
      EditCardTitle
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

export default EditCardTitle;
