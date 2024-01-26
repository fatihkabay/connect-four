import React, { useState } from "react";
import Slot from "./Slot";
import "../App.css";

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

  const handleClick = (e) => {
    const column = e.target.getAttribute("x");
    const row = board.findIndex((rowArr, index) => {
      return rowArr[column] !== "" || index === board.length - 1;
    });
  };

  if (row !== board.length - 1) row -= 1;
  if (board[row][column] !== "") row -= 1;

  return (
    <>
      {gameOver && <h1>{oppPlayer === "X" ? "Red" : "Black"} Wins</h1>}
      <h2 id="playerDisplay">{currPlayer === "X" ? "Red" : "Black"} Move</h2>
      <div id="board" onClick={gameOver ? null : handleClick}>
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
