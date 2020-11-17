import React from "react";
import cssClasses from "./Todo.module.css";
import TodoElement from "../TodoElement/TodoElement";

const Todo = () => {
  return (
    <>
      <div className={cssClasses.TodoContainer}>
        <h1>Todos</h1>
        <TodoElement todoListCss={cssClasses.TodoList}/>
      </div>
    </>
  );
};

export default Todo;
