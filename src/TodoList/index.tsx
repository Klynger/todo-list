import List from './List';
import AddTodo from './AddTodo';
import { TODOS } from '../mock';
import Filters from './Filters';
import { TodoType } from './Todo';
import React, { useState, useEffect } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState(TODOS);
  const [showComplete, setshowComplete] = useState(true);
  const [visibleTodos, setVisibleTodos] = useState(todos);

  useEffect(() => {
    if (!showComplete) {
      setVisibleTodos(todos.filter(todo => !todo.complete));
    } else {
      setVisibleTodos(todos);
    }
  }, [todos, showComplete]);

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
      <Filters
        showComplete={showComplete}
        onShowCompleteClick={() => setshowComplete(!showComplete)}
      />
      <List todos={visibleTodos} onTodoClick={handleTodoClick} />
    </div>
  );
}
