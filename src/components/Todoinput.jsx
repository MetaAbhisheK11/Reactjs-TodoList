import React, { useState } from "react";

export default function Todoinput(props) {
  const { handleAddTodos } = props;
  const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter Todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue(""); //sets the input as empty again
        }}
      >
        Add
      </button>
    </header>
  );
}
