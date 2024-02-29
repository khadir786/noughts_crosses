import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeType, count, onOpenModal, setModal) {
  for (const { combo, strikeClass } of winningCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];
    console.log(
      `tileValue1: ${tileValue1} tileValue2: ${tileValue2} tileValue1: ${tileValue3}`
    );

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeType(strikeClass);
      setModal((prevModal) => ({
        ...prevModal,
        type: "winner",
        title: `Player ${tileValue1} has won!!!!!`,
        message: "cool",
      }));
      console.log(`Player ${tileValue1} has won!!!!!`);
      onOpenModal();
      return;
    }
  }

  // check for draw
  if (count >= 9) {
    setModal((prevModal) => ({
      ...prevModal,
      type: "draw",
      title: "The game has ended in a draw...",
      message: "cool",
    }));
    console.log("The game has ended in a draw...");
    onOpenModal();
    return;
  }
}

function NoughtsCrosses() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
  const [strikeType, setStrikeType] = useState();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false); // for modal
  const [modalInfo, setModalInfo] = useState({
    type: "",
    title: "",
    message: "",
  });

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  console.log("tiles clicked: " + count);

  useEffect(() => {
    checkWinner(tiles, setStrikeType, count, onOpenModal, setModalInfo);
  }, [count, tiles]);

  function handleTileClick(index) {
    if (tiles[index] != null) return; // tile already filled in
    const newTiles = [...tiles];
    newTiles[index] = currentPlayer;
    setCount((c) => c + 1);
    setTiles(newTiles);
    const newPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    setCurrentPlayer(newPlayer);

    console.log(index);
  }

  return (
    <div className="app">
      <div className="title">
        <h1>
          n<span style={{ color: "darkorange" }}>O</span>ughts & cr
          <span style={{ color: "lightskyblue" }}>X</span>sses
        </h1>
      </div>
      <div className="GameContainer">
        <Board
          tiles={tiles}
          onTileClick={handleTileClick}
          currentPlayer={currentPlayer}
          strikeType={strikeType}
        />
        <div className="resetButton ">{count > 0 && <button>Reset Game</button>}</div>
        <GameOver
          onOpenModal={onOpenModal}
          onCloseModal={onCloseModal}
          open={open}
          modalInfo={modalInfo}
        />
      </div>
    </div>
  );
}

export default NoughtsCrosses;
