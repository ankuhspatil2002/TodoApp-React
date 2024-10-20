import React, { useState } from "react";
import "./AddTodo.css";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [todos, setTodos] = useState([{ value: "sampleTodo", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  function handleClick() {
    if (newTodo.trim()) {
      setTodos([...todos, { value: newTodo, id: uuidv4() }]);
      setNewTodo("");
    }
  }

  function addTodos(event) {
    setNewTodo(event.target.value);
  }

  function removeAll() {
    setTodos([]);
  }

  return (
    <div className="addTodo">
      <div className="inputbox">
        <input
          className="todoInput"
          type="text"
          value={newTodo}
          onChange={addTodos}
          placeholder="Enter a new todo"
        />
        <button type="button" className="todoBtn" onClick={handleClick}>
          {" "}
          Add{" "}
        </button>
        <button type="button" className="todoBtn" onClick={removeAll}>
          {" "}
          Remove All{" "}
        </button>
      </div>
      <div className="line"></div>
      <div className="displayTodo">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTodo;
