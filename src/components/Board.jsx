import Strike from "./Strike";
import Tile from "./Tile";

export default function Board({ tiles, onTileClick, currentPlayer, strikeType }) {
  // Array to hold classNames corresponding to each tile position
  const tileClassNames = [
    ["right-border", "bottom-border"], // Tile 0
    ["right-border", "bottom-border"], // Tile 1
    ["bottom-border"],                 // Tile 2
    ["right-border", "bottom-border"], // Tile 3
    ["right-border", "bottom-border"], // Tile 4
    ["bottom-border"],                 // Tile 5
    ["right-border"],                  // Tile 6
    ["right-border"],                  // Tile 7
    []                                 // Tile 8
  ];

  // Function to render a Tile component based on index and classNames
  const renderTile = (index) => (
    <Tile
      key={index}
      onClick={() => onTileClick(index)}
      value={tiles[index]}
      className={tileClassNames[index].join(" ")}
      currentPlayer={currentPlayer}
    />
  );

  // Generate Tile components using renderTile function
  const generateTiles = () => {
    const tileComponents = [];
    for (let i = 0; i < 9; i++) {
      tileComponents.push(renderTile(i));
    }
    return tileComponents;
  };

  return (
    <div className="BoardContainer">
      {generateTiles()}
      <Strike strikeType={strikeType} currentPlayer={currentPlayer} />
    </div>
  );
}
