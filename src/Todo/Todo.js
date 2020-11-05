import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import cssClasses from "./Todo.module.css";

const Todo = () => {
  return (
    <>
      <div className={cssClasses.TodoContainer}>
        <h1>Todos</h1>
        <div className={cssClasses.TodoList}>
          <Checkbox />
          <span>Elemento Todo</span>
          <button>Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
