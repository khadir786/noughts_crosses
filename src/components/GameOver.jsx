import { useState } from "react";
import "react-responsive-modal/styles.css";
import "../css/custom_modals.css";
import { Modal } from "react-responsive-modal";

function GameOver({ onOpenModal, onCloseModal, open }) {
  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "NC-GameOverModal",
        }}
      >
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>
  );
}

export default GameOver;
