import React from "react";
import Square from "./Square";

function Board() {
  const [state, setState] = React.useState({
    squares: Array(9).fill(null)
  });

  function handleClick(index) {
    const squares = state.squares.slice();
    squares[index] = "X";
    setState({ squares: squares });
    alert(index);
  }
  function renderSquare(index) {
    return (
      <Square value={state.squares[index]} onClick={() => handleClick(index)} />
    );
  }
  const status = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
