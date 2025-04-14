import React from "react";

const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <li>
      {todo.title}
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
