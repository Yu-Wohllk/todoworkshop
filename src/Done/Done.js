import React from "react";
import cssClasses from "./Done.module.css";
import TodoElement from "../TodoElement/TodoElement";

const Done = (props) => {
  return (
    <>
      <div className={cssClasses.DoneContainer}>
        <h1>Done</h1>
        {props.doneList.map((doneElement) => (
          <TodoElement
            key={doneElement.id}
            todoElementCss={cssClasses.DoneList}
          >
            {doneElement.label}
          </TodoElement>
        ))}
      </div>
    </>
  );
};

export default Done;