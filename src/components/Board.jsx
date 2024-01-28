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

  //win variations
  const checkWin = (row, column, ch) => {
    //row increases, column stays the same
    try {
      if (board[row + 1][column] === ch) {
        if (board[row + 2][column] === ch) {
          if (board[row + 3][column] === ch) {
            return true;
          }
        }
      }
    } catch (ex) {
      console.log(ex);
    }
    //row increases, column increases
    try {
      if (board[row + 1][column + 1] === ch) {
        if (board[row + 2][column + 2] === ch) {
          if (board[row + 3][column + 3] === ch) {
            return true;
          }
        }
      }
    } catch (ex) {
      console.log(ex);
    }
    //row increases, column decreases
    try {
      if (board[row + 1][column - 1] === ch) {
        if (board[row + 2][column - 2] === ch) {
          if (board[row + 3][column - 3] === ch) {
            return true;
          }
        }
      }
    } catch (ex) {
      console.log(ex);
    }
    //row stays at same, column increases
    try {
      if (board[row][column + 1] === ch) {
        if (board[row][column + 2] === ch) {
          if (board[row][column + 3] === ch) {
            return true;
          }
        }
      }
    } catch (ex) {
      console.log(ex);
    }
    //row stays at same, column decreases
    try {
      if (board[row][column - 1] === ch) {
        if (board[row][column - 2] === ch) {
          if (board[row][column - 3] === ch) {
            return true;
          }
        }
      }
    } catch (ex) {
      console.log(ex);
    }
    //row decreases, column decreases
    try {
      if (board[row - 1][column - 1] === ch) {
        if (board[row - 2][column - 2] === ch) {
          if (board[row - 3][column - 3] === ch) {
            return true;
          }
        }
      }
    } catch (ex) {
      console.log(ex);
    }
    //row decreases, column increases
    try {
      if (board[row - 1][column + 1] === ch) {
        if (board[row - 2][column + 2] === ch) {
          if (board[row - 3][column + 3] === ch) {
            return true;
          }
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const updateBoard = (row, column, ch) => {
    setBoard((prev) => {
      const boardCopy = [...prev];
      boardCopy[row][column] = ch;
      return boardCopy;
    });
    return checkWin(row, column, ch);
  };

  const handleClick = (e) => {
    const column = e.target.getAttribute("x");
    let row = board.findIndex((rowArr, index) => {
      return rowArr[column] !== "" || index === board.length - 1;
    });
    if (row !== board.length - 1) row -= 1;
    if (board[row][column] !== "") row -= 1;

    setGameOver(updateBoard(row, column, currPlayer));
    
    if (!gameOver) {
      const currPlayerCopy = currPlayer;
      setCurrPlayer(oppPlayer);
      setOppPlayer(currPlayerCopy);
    }
  };

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
