import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../redux/actions';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch todos from an API if needed
    // dispatch(fetchTodos()); 
  }, []);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="max-w-[50%] container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded px-4 py-2 mr-2 flex-grow"
          placeholder="Add Todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button
          className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between mb-2 border-b pb-2"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
              className="mr-2"
            />
            <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDeleteTodo(todo.id)}
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