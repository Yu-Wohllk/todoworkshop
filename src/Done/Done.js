import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import cssClasses from "./Done.module.css";

const Done = () => {
  return (
    <>
      <div className={cssClasses.DoneContainer}>
        <h1>Done</h1>
        <div className={cssClasses.DoneList}>
          <Checkbox />
          <span>Elemento Todo</span>
          <button>Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default Done;
