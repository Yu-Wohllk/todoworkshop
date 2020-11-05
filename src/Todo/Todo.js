import React from "react";
import cssClasses from "./Todo.module.css";

const Todo = () => {
  return (
    <>
      <div className={cssClasses.Todo}>
        <input type="checkbox" />
        <span>Elemento Todo</span>
        <button>Eliminar</button>
      </div>
    </>
  );
};

export default Todo;
