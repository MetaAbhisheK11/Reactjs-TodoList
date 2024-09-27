import React, { useState } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }
  function handleEditTodo(index) {}
  return (
    <>
      <Todoinput handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  );
}

export default App;
