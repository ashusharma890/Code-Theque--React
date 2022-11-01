import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { CloseBtn, ModalProps } from "../Modal";

const NewCard = ({ closeModal, identifier }: ModalProps) => {
  return (
    <div>
      NewCard
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

export default NewCard;
