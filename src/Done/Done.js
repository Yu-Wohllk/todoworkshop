import React from "react";
import cssClasses from "./Done.module.css";
import Button from '../Button/Button'

const Done = () => {
  return (
    <>
      <div className={cssClasses.Done}>
        <input type="checkbox" />
        <span>Elemento Todo</span>
        <Button type={'danger'}>Eliminar</Button>
      </div>
    </>
  );
};

export default Done;
