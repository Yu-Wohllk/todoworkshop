import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
    let buttonClass = 'button';
    if (props.color == 'red')
        buttonClass += " redButton"; 
    else 
        buttonClass += " greenButton";
    return <button className={`${buttonClass}`}>Press me</button>;
};

export default ButtonComponent;
