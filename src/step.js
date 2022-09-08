import React from "react";

export default function Step(props) {
    return (
        <div className={"stepBlock" + (props.selected ? " selected" : "")}>
            <div className="circleWrapper" onClick={() => props.updateStep(props.index + 1)}>
                <div className="circle">{props.index + 1}</div>
            </div>
            <span>{props.label}</span>
        </div>
    )
}