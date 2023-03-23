import React,{useState} from "react";
import Board from "./App";


export default function Game() {
    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext=currentMove %2 === 0 ;
    console.log(currentMove);
    const currentSquares = history[currentMove];
    function handlePlay(nextSquares) {
       const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
        console.log(currentMove,nextHistory.length);
  
      }
//why
function  jumTo(nextMove){
setCurrentMove(nextMove);

      }
const destination=history.map((square,move)=> {
 
  let description
  if (move>0) {
   description=`#destination ${move}`
  }else
  {
    description=`Start Game`
  }
 return <li key={move}><button onClick={()=>jumTo(move)}>{description}</button></li>

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
    )
   }
  

