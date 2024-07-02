import "./PlayButton.css";
const PlayButton = ({ onClick }: { onClick: any }) => {
  return (
    <button className="play-button" onClick={onClick}>
      <span></span>
    </button>
  );
};

export default PlayButton;
