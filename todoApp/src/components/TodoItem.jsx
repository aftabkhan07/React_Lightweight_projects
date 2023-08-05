import React, { useContext } from "react";
import noteContext from "../context/notecontext"; // just to check the context api

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  
  const a = useContext(noteContext) // just to check the context api
  
  return (
    <li>
      {/* {console.log(`This is about ${a.name} with age ${a.age}`)}  */}
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="btn btn-danger"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
