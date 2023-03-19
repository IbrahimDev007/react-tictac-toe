import React, { useState } from 'react';
function Square({value,onSquareClick}){
  // const [value, setvalue] = useState(null)
 
  return   <button className="square" onClick={onSquareClick}>{value}</button>
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares ,Setsquares]=useState(Array(9).fill(null));
  function handelclck(i){
    const nextSquares=squares.slice();
    if(squares[i]){
      return;
    }
    if(xIsNext){
    nextSquares[i]="X";}
    else{
     nextSquares[i]="O" 
    }
    Setsquares(nextSquares);
    setXIsNext(!xIsNext)
 }
  return (
    <div>
      <div className="board-row">
      <Square value={squares[0]} onSquareClick={()=>handelclck(0)} />
      <Square value={squares[1]} onSquareClick={()=>handelclck(1)}/>
      <Square value={squares[2]} onSquareClick={()=>handelclck(2)}/>
      </div>
      <div className="board-row">
      <Square value={squares[3]} onSquareClick={()=>handelclck(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handelclck(4)}/>
      <Square value={squares[5]} onSquareClick={()=>handelclck(5)}/>
      </div>
      <div className="board-row">
      <Square value={squares[6]} onSquareClick={()=>handelclck(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handelclck(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handelclck(8)}/>
      </div>
    </div>
  );
}
