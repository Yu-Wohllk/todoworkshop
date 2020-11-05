import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import cssClasses from "./Todo.module.css";
import Button from '../Button/Button'

const Todo = () => {
  return (
    <>
      <div className={cssClasses.TodoContainer}>
        <h1>Todos</h1>
        <div className={cssClasses.TodoList}>
          <Checkbox />
          <span>Elemento Todo</span>
          <Button type={'danger'}>Eliminar</Button>
        </div>
      </div>
    </>
  );
};

export default Todo;
