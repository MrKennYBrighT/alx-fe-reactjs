import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a Todo App', completed: false },
    { text: 'Write Tests', completed: false }
  ]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.text}
            onClick={() => handleToggleTodo(index)}
            style={{
              cursor: 'pointer',
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
            <button
              data-testid={`delete-${todo.text}`}
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTodo(index);
              }}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
