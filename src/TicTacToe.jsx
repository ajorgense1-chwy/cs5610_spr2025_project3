import { useContext, useState } from "react";

import './TicTacToe.css'
import TicTacToeCell from "./TicTacToeCell";
import { ticTacToeContext } from "./TicTacToeProvider";

export default function TicTacToe() {

    const globalData = useContext(ticTacToeContext);

    const gameState = globalData.gameState;

    const ticTacToeGrid = [];

    for(let row = 0; row < gameState.length; row++) {
        const rowHTML = []
        for(let cell = 0; cell < gameState[row].length; cell++) {
            const cellHTML = (
                <TicTacToeCell row={row} cell={cell} />)
            rowHTML.push(cellHTML);
        }
        ticTacToeGrid.push(<div className="row">{rowHTML}</div>)
    }

    return (
        <div>
            <div>
                {ticTacToeGrid}
            </div>
        </div>
    )
}