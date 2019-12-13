import React, { useState } from 'react';
import { TodoType } from './Todo';

interface Props {
  onAddTodo: (todo: TodoType) => void;
}

function AddTodo(props: Props) {
  const { onAddTodo } = props;
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo({
      title,
      username,
      complete: false,
      dueDate: new Date(),
    });
    setTitle('');
    setUsername('');
  };

  return (
    <form className="add-todo-container" onSubmit={handleAddTodo}>
      <input
        value={title}
        className="input"
        placeholder="Title"
        onChange={e => setTitle(e.target.value)}
      />
      <input
        value={username}
        className="input"
        placeholder="Usuário"
        onChange={e => setUsername(e.target.value)}
      />
      <button className="add-todo-button" onClick={handleAddTodo}>
        <span className="add-todo-text">Add Todo</span>
      </button>
    </form>
  );
}

export default AddTodo
