import React from "react";

const Checkbox = ({ onCheck, task }) => {
  return (
    <div className="checkbox">
      <input
        id={task.id}
        type="checkbox"
        // defaultChecked={false}
        checked={task.checked}
        onChange={() => onCheck(task.id)}
      />
      <label htmlFor={task.id}></label>
    </div>
  );
};

export default Checkbox;
