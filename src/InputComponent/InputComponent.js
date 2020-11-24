import React from "react";
import "./inputComponent.css";

const InputComponent = (props) => <input onChange={props.onChange} value={props.value}></input>;

export default InputComponent;
