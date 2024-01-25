import React, { useState } from "react";
import Slot from "./Slot";

function Board() {
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
  const [currPlayer, setCurrPlayer] = useState("X");
  const [oppPlayer, setOppPlayer] = useState("O");
  const [gameOver, setGameOver] = useState(false);

  return (
    <>
      <h2></h2>
      <div id="board">
        {board.map((row, i) => {
          return row.map((ch, j) => {
            return <Slot ch={ch} y={i} x={j} />;
          });
        })}
      </div>
    </>
  );
}

export default Board;
