import React from "react";
import cssClasses from './Checkbox.module.css'

const Checkbox = () => {
  return (
    <label className={cssClasses.Checkbox}>
      <input type="checkbox" checked="checked" />
      <span className={cssClasses.Checkmark}></span>
    </label>
  );
};

export default Checkbox;
