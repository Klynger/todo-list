import React from 'react';
import Todo, { TodoType } from './Todo';

interface Props {
  title?: string
  todos: TodoType[];
  showTodoUsername?: boolean;
  onTodoClick: (todo: TodoType) => void;
}

export default function List(props: Props) {
  const {
    title,
    todos,
    onTodoClick,
    showTodoUsername,
  } = props;

  return (
    <section className="list-container">
      {title && (
        <h2>{title}</h2>
      )}
      <ul className="list">
        {todos.map(todo => (
          <Todo
            todo={todo}
            key={todo.title}
            onTodoClick={onTodoClick}
            showUsername={showTodoUsername}
          />
          ))}
      </ul>
    </section>
  );
}
