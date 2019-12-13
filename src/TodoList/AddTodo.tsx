import Button from './Button';
import { TodoType } from './Todo';
import React, { useState } from 'react';

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
      <Button onClick={handleAddTodo}>Adicionar TODO</Button>
    </form>
  );
}

export default AddTodo
