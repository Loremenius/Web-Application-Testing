import React from "react";
import { tsPropertySignature } from "@babel/types";

const Dashboard = (props) =>{
    

    return(
        <div className="dashboard">
            <button onClick={props.hit}>hit</button>
            <button onClick={props.strike}>strike</button>
            <button onClick={props.ball}>ball</button>
            <button onClick={props.foul}>foul</button>

        </div>
    )
}

export default Dashboard;