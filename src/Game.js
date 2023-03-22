import React,{useState} from "react";
import Board from "./App";


export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];
   
    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
      }

      const jumTo=(nextMove)=>{

      }
const destination=history.map((square,move)=> {
 
  let description
  if (move>0) {
   description=`#destination ${move}`
  }else
  {
    description=`Start Game`
  }
 return <li><button onClick={()=>jumTo(move)}>{description}</button></li>

}
 
 
)
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext}  squares={currentSquares} onplay={handlePlay}/>
        </div>
        <div className="game-info">
          <ol>{destination}</ol>
        </div>
      </div>
    );
  }

