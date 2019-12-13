import React from 'react';
import Todo, { TodoType } from './Todo';

interface Props {
  todos: TodoType[];
  onTodoClick: (todo: TodoType) => void;
}

export default function List(props: Props) {
  const { todos, onTodoClick } = props;

  return (
    <ul className="list">
      {todos.map(todo => (
        <Todo todo={todo} key={todo.title} onTodoClick={onTodoClick} />
      ))}
    </ul>
  );
}
