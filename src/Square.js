export default function Square({value , onClick}){
    return <button className="square" data-testid = "square" onClick = {onClick}>{value}</button> ;
}