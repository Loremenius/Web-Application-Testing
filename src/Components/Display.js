import React from "react";

const Display = (props) =>{
    

    return(
        <div className="display">
            <div className="info">
                <h1>Strikes:</h1>
                <p>{props.strikes}</p>
            </div>
            <div className="info">
                <h1>Balls:</h1>
                <p>{props.balls}</p>
            </div>
        </div>
    )
}

export default Display;