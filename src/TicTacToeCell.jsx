import { useContext } from 'react';
import './TicTacToe.css'
import { ticTacToeContext } from './TicTacToeProvider';

/*
props = {
    gameState: //the tic tac toe game state
    row: 0, 1, or 2
    cell: 0, 1, or 2
}

*/

export default function TicTacToeCell(props) {
    const gameState = useContext(ticTacToeContext).gameState;
    const changeCellValue = useContext(ticTacToeContext).changeCellValue;
    const cell = props.cell;
    const row = props.row;

    const cellValue = gameState[row][cell];

    return (<div onClick={() => changeCellValue(row, cell)}  className='cell'>{cellValue}</div>)

}