import React, { useState } from "react";
import Checkbox from "./Checkbox";

const NewTask = ({ task, onAdd }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text });
    setText("");
  };
  const [text, setText] = useState("");
  return (
    <form className="task-container" onSubmit={onSubmit}>
      <Checkbox task={task} />
      <input
        id="newTask"
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default NewTask;
