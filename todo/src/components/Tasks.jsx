import React from "react";
import Checkbox from "./Checkbox";

const Tasks = ({ tasks, onCheck, onDelete}) => {
  return (
    <>
      {tasks.map((task) => (
        <div className="task-container">
          <Checkbox onCheck={onCheck} task={task} />

          <h3
            onClick={() => onCheck(task.id)}
            key={task.id}
            className={task.checked ? "striked" : "task"}
          >
            {" "}
            {task.text}
          </h3>
          <svg onClick={ () => onDelete(task.id)} id="cross" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path
              fill="#494C6B"
              fill-rule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </div>
      ))}
    </>
  );
};

export default Tasks;
