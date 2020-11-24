import React from "react";
import "./Button.css";

const Button = (props) => {
    const cssClasses = ['button']
    
    const types = {
        danger: cssClasses.concat('redButton'),
        success: cssClasses.concat('greenButton')
    }
    return types[props.type] ? <button onClick={props.onClick} className={`${types[props.type].join(" ")}`}>{props.children}</button> : null;
};

Button.defaultProps = {
    type: 'success',
    label: 'Press me'
}

export default Button;
