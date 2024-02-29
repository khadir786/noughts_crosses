import { useState } from "react";
import "react-responsive-modal/styles.css";
import "../css/custom_modals.css";
import { Modal } from "react-responsive-modal";
import dk from "../assets/dk.gif";
import mrio from "../assets/mrio.gif";
import sf from "../assets/sf.gif";

function GameOver({ onOpenModal, onCloseModal, open, modalInfo, handleReset }) {
  const modalImage = modalInfo.type === 'winner' ? dk : mrio;

  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        classNames={{
          modal: "GameOverModal",
        }}
      >
        <div className="modal-title">
          <h2>{modalInfo.title}</h2>
        </div>
        <div className="modal-content-container">
          <div className="modal-message">
            <img src={modalImage} alt="monkey dance" />
            <p>{modalInfo.message}</p>
          </div>
          <div className="modal-buttons">
            <button onClick={handleReset}>Play Again?</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default GameOver;
