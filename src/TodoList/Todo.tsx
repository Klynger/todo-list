import React from 'react';

export interface TodoType {
  title: string;
  dueDate: Date;
  username: string;
  complete: boolean;
}

interface Props {
  todo: TodoType;
  showUsername?: boolean;
  onTodoClick: (todo: TodoType) => void;
}

export default function Todo(props: Props) {
  const {
    todo,
    showUsername = true,
    todo: {
      title,
      dueDate,
      complete,
      username,
    },
    onTodoClick,
  } = props;

  const classes = `todo-container ${complete ? 'todo-complete' : ''}`;

  return (
    <li className={classes} onClick={() => onTodoClick(todo)}>
      <span className="todo-checked" />
      {showUsername && (
        <span className="todo-author-text">
          Autor: 
          <span className="todo-username">{' ' + username}</span>
        </span>
      )}
      <span className="todo-title">
        {title}
      </span>
      <span className="todo-date-time">
        {dueDate.toLocaleDateString()} - {dueDate.toLocaleTimeString()}
      </span>
    </li>
  );
}
