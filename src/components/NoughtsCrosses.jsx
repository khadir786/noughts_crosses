import { useState } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";

function NoughtsCrosses() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);

  function handleTileClick(index) {
    if (tiles[index] != null) return; // tile already filled in
    const newTiles = [...tiles];
    newTiles[index] = currentPlayer;
    setTiles(newTiles);
    const newPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    setCurrentPlayer(newPlayer);

    console.log(index);
  }

  return (
    <div className="app">
      <div className="title">
        <h1>Noughts & Crosses</h1>
      </div>
      <div className="GameContainer">
        <Board
          tiles={tiles}
          onTileClick={handleTileClick}
          currentPlayer={currentPlayer}
        />
      </div>
    </div>
  );
}

export default NoughtsCrosses;
