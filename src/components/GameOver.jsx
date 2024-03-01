import { useState } from "react";
import { Modal } from "react-responsive-modal";
import { Carousel } from "react-responsive-carousel";
import dk from "../assets/dk.gif";
import mrio from "../assets/mrio.gif";
import sf from "../assets/sf.gif";
import "react-responsive-modal/styles.css";
import "../css/custom_modals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GameOver({
  onOpenModal,
  onCloseModal,
  open,
  modalInfo,
  handleReset,
  stats,
}) {
  const modalImage = modalInfo.type === "winner" ? dk : mrio;

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
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          autoPlay
          interval={3000}
        >
          <div className="modal-winner-draw">
            <div className="modal-title">
              <h2>{modalInfo.title}</h2>
            </div>
            <div className="modal-message">
              <img id="modal-image" src={modalImage} alt="monkey dance" />
            </div>
          </div>
          <div>
            <h1>Stats</h1>
            <p>O wins: {stats.oWins}</p>
            <p>X wins: {stats.xWins}</p>
            <p>Draws: {stats.draws}</p>
          </div>
        </Carousel>

        <div className="modal-buttons">
          <button onClick={handleReset}>Play Again?</button>
        </div>
      </Modal>
    </div>
  );
}

export default GameOver;
