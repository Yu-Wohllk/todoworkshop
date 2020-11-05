import React from "react";
import cssClasses from "./Todo.module.css";
import Button from '../Button/Button'

const Todo = () => {
  return (
    <>
      <div className={cssClasses.Todo}>
        <input type="checkbox" />
        <span>Elemento Todo</span>
        <Button type={'danger'}>Eliminar</Button>
      </div>
    </>
  );
};

export default Todo;
