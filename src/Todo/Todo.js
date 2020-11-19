import React from "react";
import cssClasses from "./Todo.module.css";
import TodoElement from "../TodoElement/TodoElement";

const Todo = (props) => {
  return (
    <>
      <div className={cssClasses.TodoContainer}>
        <h1>Todos</h1>
        {props.todoList.map((todoElement) => (
          <TodoElement todoElementCss={cssClasses.TodoList}>{todoElement.label}</TodoElement>
        ))}
      </div>
    </>
  );
};

export default Todo;
