import { useContext, useState } from "react";
import "./CheckBoxes.css";
import IndividualBox from "./IndividualBox";
import { CheckBoxContext } from "./CheckAppProvider";



export default function CheckBoxes() {

    const globalData = useContext(CheckBoxContext);
    const allBoxesChecked = globalData.allBoxesChecked;


  return (
    <div>

    <div className="container">



      <div className="row">
        <IndividualBox backgroundColor='pink' x={0} y={0}/>        
        <IndividualBox backgroundColor='green' x={1} y={0}/>
      </div>

      <div className="row">
      <IndividualBox backgroundColor='blue' x={0} y={1} />
      <IndividualBox backgroundColor='black' x={1} y={1}/>
      </div>
      </div>
      {allBoxesChecked && <h5>All boxes checked, bro</h5>}

    </div>
  );
}
