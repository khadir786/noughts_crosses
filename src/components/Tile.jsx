export default function Tile({ className, value, onClick, currentPlayer }) {
  let hoverClass = null;
  if (value == null && currentPlayer != null){
    hoverClass =  `${currentPlayer.toLowerCase()}-hover`; 
  }
    
    return (
    <div
      onClick={onClick}
      className={`tile ${className}  ${hoverClass}`}>
      {value}
    </div>
  );
}