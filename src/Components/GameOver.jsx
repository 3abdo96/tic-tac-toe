import React from "react";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default GameOver;
