import { useState } from "react";
import './Millisecond.css';

//const movies = ["star wars", "totoro"]
//const [firstMovie, secondMovie] = movies
// firstMovie === "star wars"
// secondMovie === "totoro"

export default function Millisecond(props) {
    const [timeInMs, setTimeInMs] = useState(-1);
    const [buttonClickCount, setButtonClickCount] = useState(0)

    function updateCurrentTimeInMs() {
        setTimeInMs(new Date().getMilliseconds());
        setButtonClickCount(buttonClickCount + 1);
    }

    return (<div className={props.textColor}>
        {timeInMs}

        <button onClick={updateCurrentTimeInMs}>Click here to refresh the timestamp :D</button>    
        <div>
            (this button has been clicked {buttonClickCount} times)
        </div>
    </div>);
}

