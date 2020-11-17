import React from "react";
import cssClasses from "./Todo.module.css";
import TodoElement from "../TodoElement/TodoElement";

const Todo = (props) => {
  return (
    <>
      <div className={cssClasses.TodoContainer}>
        <h1>Todos</h1>
        {props.list.map((todo) => (
          <TodoElement label={todo.label} todoListCss={cssClasses.TodoList} />
        ))}
      </div>
    </>
  );
};

export default Todo;
