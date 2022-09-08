import React from "react";
import Step from "./step";

export default function StepNavigation(props) {
    return (
        <div className="stepWrapper">
            {props.labelArray.map((item, index) => <Step key={index} index={index} label={item} updateStep={props.updateStep} selected={props.currentStep === index + 1}></Step>) }
        </div>
    )
}