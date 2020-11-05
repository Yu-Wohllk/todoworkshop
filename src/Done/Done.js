import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import cssClasses from "./Done.module.css";
import Button from "../Button/Button";

const Done = () => {
  return (
    <>
      <div className={cssClasses.DoneContainer}>
        <h1>Done</h1>
        <div className={cssClasses.DoneList}>
          <Checkbox />
          <span>Elemento Todo</span>
          <Button type={"danger"}>Eliminar</Button>
        </div>
      </div>
    </>
  );
};

export default Done;
