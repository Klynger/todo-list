import List from './List';
import AddTodo from './AddTodo';
import { TODOS } from '../mock';
import React, { useState } from 'react';
import { TodoType } from './Todo';

export default function TodoList() {
  const [todos, setTodos] = useState(TODOS);

  const handleAddTodo = (todo: TodoType) => {
    setTodos(todos.concat([todo]));
  };

  const handleTodoClick = (todo: TodoType) => {
    const newTodos = todos.map(
      t => {
        if (t.title === todo.title) {
          return {
            ...t,
            complete: !t.complete
          };
        }
        return t;
      });

      setTodos(newTodos)
  }

  return (
    <div className="todo-list-container">
      <h1 className="app-title">
        Todo List
      </h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <List todos={todos} onTodoClick={handleTodoClick} />
    </div>
  );
}
