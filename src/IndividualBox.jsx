import { useContext, useState } from 'react';
import './CheckBoxes.css';
import { CheckBoxContext } from './CheckAppProvider';

export default function IndividualBox(props) {
    const globalData = useContext(CheckBoxContext);
    const checkBoxState = globalData.checkBoxState;
    const isThisBoxClicked = checkBoxState[props.x][props.y];

    let boxClassName = "box";
    if (isThisBoxClicked) {
        boxClassName = "box box-filled-" + props.backgroundColor;
    }

    function updateBoxColor() {
        globalData.flipSetCheckBox(props.x, props.y)
    }
    return (<div className={boxClassName} onClick={() => updateBoxColor()}></div>)
}