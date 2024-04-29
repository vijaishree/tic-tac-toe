export default function Board(){

  [square,setSquare] = useState(Array(9).fill(null));

  return(<>
  <div className="board-row">
    <Square value={square[0]}/>
    <Square value={square[1]}/>
    <Square value={square[2]}/>
  </div>

  <div className="board-row">
    <Square value={square[3]}/>
    <Square value={square[4]}/>
    <Square value={square[5]}/>
  </div>

  <div className="board-row">
    <Square value={square[6]}/>
    <Square value={square[7]}/>
    <Square value={square[8]}/>
  </div>
  </>)
}

function Square({value}){

  return  <buttton className="square" >{value}</buttton>;

}