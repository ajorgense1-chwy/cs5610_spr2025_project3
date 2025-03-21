import { createContext, useState } from "react";

export const CheckBoxContext = createContext();

export default function CheckAppProvider(props) {
    const [checkBoxState, setCheckBoxState] = useState(
        [
            [false, false],
            [false, false]
        ]
    ) 

    const allBoxesChecked = checkBoxState[0][0] && checkBoxState[1][0] && checkBoxState[0][1] && checkBoxState[1][1];


    function flipSetCheckBox(x, y) {
        checkBoxState[x][y] = !checkBoxState[x][y]
        setCheckBoxState([...checkBoxState])
    }

    const globalData = {
        checkBoxState: checkBoxState, 
        flipSetCheckBox: flipSetCheckBox,
        allBoxesChecked: allBoxesChecked
    }


    return (<CheckBoxContext.Provider value={globalData}>
            {props.children}
        </CheckBoxContext.Provider>)
}


/*
<CheckAppProvider>
    <CheckApp /> <==== children
</CheckAppProvider>

*/