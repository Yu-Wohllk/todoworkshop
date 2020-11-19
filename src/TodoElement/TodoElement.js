import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import Button from '../Button/Button'

const TodoElement = (props) => (
  <div className={props.todoElementCss}>
    <Checkbox />
    <span>{props.children}</span>
    <Button type={"danger"}>Eliminar</Button>
  </div>
);

export default TodoElement;