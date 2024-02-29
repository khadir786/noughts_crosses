import Board from './Board';
function NoughtsCrosses() {
  return (
    <div className="app">
      <div className="title">
        <h1>Noughts & Crosses</h1>
      </div>
      <div className="GameContainer">
        <Board />
      </div>
    </div>
  );
}

export default NoughtsCrosses;
