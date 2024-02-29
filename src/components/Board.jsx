import Strike from "./Strike";
import Tile from "./Tile";

export default function Board({ tiles, onTileClick, currentPlayer, strikeType }) {
  return (
    <div className="BoardContainer">
      <Tile
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="right-border bottom-border"
        currentPlayer={currentPlayer}
      />
      <Tile
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="right-border bottom-border"
        currentPlayer={currentPlayer}
      />
      <Tile
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        currentPlayer={currentPlayer}
        className="bottom-border"
      />
      <Tile
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="right-border bottom-border"
        currentPlayer={currentPlayer}
      />
      <Tile
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="right-border bottom-border"
        currentPlayer={currentPlayer}
      />
      <Tile
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className="bottom-border"
        currentPlayer={currentPlayer}
      />
      <Tile
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="right-border"
        currentPlayer={currentPlayer}
      />
      <Tile
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="right-border"
        currentPlayer={currentPlayer}
      />
      <Tile
        onClick={() => onTileClick(8)}
        value={tiles[8]}
        currentPlayer={currentPlayer}
      />
      <Strike strikeType={strikeType}/>
    </div>
  );
}
