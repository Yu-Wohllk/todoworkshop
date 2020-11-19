import React from "react";
import cssClasses from "./TasksContainer.module.css";
import TodoElement from "../TodoElement/TodoElement";

const TasksContainer = (props) => {
  return (
    <>
      <div className={cssClasses.TasksContainer}>
        <h1>{props.children}</h1>
        {props.taskList.map((task) => (
          <TodoElement key={task.id} todoElementCss={cssClasses.TasksList}>
            {task.label}
          </TodoElement>
        ))}
      </div>
    </>
  );
};

export default TasksContainer;
