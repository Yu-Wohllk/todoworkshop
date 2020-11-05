import React from "react";
import cssClasses from "./Done.module.css";

const Done = () => {
  return (
    <>
      <div className={cssClasses.Done}>
        <input type="checkbox" />
        <span>Elemento Todo</span>
        <button>Eliminar</button>
      </div>
    </>
  );
};

export default Done;
