import React, { useState } from 'react';
function Square({value,onSquareClick}){
  // const [value, setvalue] = useState(null)
 
  return   <button className="square" onClick={onSquareClick}>{value}</button>
}
function calculateWinner(squares) {
  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board({  xIsNext, squares, onplay}) {
 

  function handelclck(i){
 
    const nextSquares=squares.slice();
  
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    if(xIsNext){
    nextSquares[i]="X";}
    else{
     nextSquares[i]="O" 
    }
   
    onplay(nextSquares);

 }

const winner=calculateWinner(squares);
let status
if (winner) {
 status= "winner is ="+winner
}else{
  status="next move ="+(xIsNext?"X":"O")
}

  return (
    <div>
      <div className="status">{status}</div>
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
