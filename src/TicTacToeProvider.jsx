import { createContext, useContext, useState } from "react";


export const ticTacToeContext = createContext();

/*
    <CustomComponent>
        <div>Hello</div>
    </CustomComponent>


    function CustomComponent(props) {
        props.children // === <div>Hello</div>
    
    }
*/

export default function TicTacToeProvider(props) {
    const children = props.children;


    const [gameState, setGameState] = useState(
        [
            ['?', '?', '?'],
            ['?', '?', '?'],
            ['?', '?', '?']
        ]
    );

    function changeCellValue(rowNumber, cellNumber) {
        const currentCellValue = gameState[rowNumber][cellNumber]
        if(currentCellValue === '?' || currentCellValue === '0') {
            gameState[rowNumber][cellNumber] = 'X'
        } else {
            gameState[rowNumber][cellNumber] = '0'
        }

        setGameState([...gameState]);
    }

    const globalData = {
        gameState: gameState,
        changeCellValue: changeCellValue
    };

    return <ticTacToeContext.Provider value={globalData}>
        {children}

    </ticTacToeContext.Provider>


}