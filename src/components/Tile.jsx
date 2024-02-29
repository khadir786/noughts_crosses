export default function Tile({ className, value, onClick }) {
  return (
    <div onClick={onClick} className={`tile ${className}`}>
      {value}
    </div>
  );
}
