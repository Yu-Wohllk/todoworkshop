import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
    const cssClasses = ['button']
    
    const types = {
        danger: cssClasses.concat('redButton'),
        success: cssClasses.concat('greenButton')
    }
    return types[props.type] ? <button className={`${types[props.type].join(" ")}`}>Press me</button> : null;
};

ButtonComponent.defaultProps = {
    type: 'success'
}

export default ButtonComponent;
