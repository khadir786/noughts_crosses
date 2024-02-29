export default function Tile({ className, value, onClick, currentPlayer }) {
  let hoverClass = null;
  let textClass = null;
  
  if (value === null) {
    hoverClass = 'hover';
    hoverClass =  `${currentPlayer.toLowerCase()}-hover`; 
  } else {
    textClass = `player-${value}`;
  }
  
  return (
    <div
      onClick={onClick}
      className={`tile ${className} ${hoverClass} ${textClass}`}>
      {value}
    </div>
  );
}