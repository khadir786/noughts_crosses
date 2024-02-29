import Strike from "./Strike";
import Tile from "./Tile";

export default function Board() {
  return (
    <div className="BoardContainer">
      <Tile className="right-border bottom-border" />
      <Tile className="right-border bottom-border" />
      <Tile className="bottom-border" />
      <Tile className="right-border bottom-border" />
      <Tile className="right-border bottom-border" />
      <Tile className="bottom-border" />
      <Tile className="right-border" />
      <Tile className="right-border" />
      <Tile />
      <Strike />
    </div>
  );
}
