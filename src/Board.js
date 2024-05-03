import Square from './Square.js';

import {useState} from 'react';

export default function Board(){

    const [square,setSquare] = useState(Array(9).fill(null));

    const [XNext , setXNext] = useState(true);

    function handleClick(index){

        const nextSquare = square.slice();

        if(nextSquare[index]) return;

        if(XNext) nextSquare[index] = "X";

        if(!XNext) nextSquare[index] = "O";

        setSquare(nextSquare);

        setXNext(!XNext);
    }

    function GameStatus(square , xNext){
        
        let status; 
        
          const winner = WinningDeclaration(square);
        
          if(winner) status = "Winner " + winner ;
        
          else status = "Next Chance " + (xNext ? "X" : "O");
        
        return status;
    
        }


    return(<>
        <div className='status' data-testid = 'status'>{GameStatus(square , XNext)}</div> 

        <div className="board-row">

        <Square value={square[0]} onClick={ () => handleClick(0)}/>
        <Square value={square[1]} onClick={ () => handleClick(1)}/>
        <Square value={square[2]} onClick={ () => handleClick(2)}/>

        </div>

        <div className="board-row">

        <Square value={square[3]} onClick={ () => handleClick(3)}/>
        <Square value={square[4]} onClick={ () => handleClick(4)}/>
        <Square value={square[5]} onClick={ () => handleClick(5)}/>

        </div>

        <div className="board-row">

        <Square value={square[6]} onClick={ () => handleClick(6)}/>
        <Square value={square[7]} onClick={ () => handleClick(7)}/>
        <Square value={square[8]} onClick={ () => handleClick(8)}/>

        </div>
        </>);
        
}