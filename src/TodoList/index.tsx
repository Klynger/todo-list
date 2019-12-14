// @ts-nocheck
import List from './List';
import AddTodo from './AddTodo';
import { TODOS } from '../mock';
import Filters from './Filters';
import { TodoType } from './Todo';
import React, { useState, useEffect } from 'react';

interface VisibleTodosByUser {
  [key: string]: TodoType[];
}

export default function TodoList() {
  const [todos, setTodos] = useState(TODOS);
  const [showComplete, setShowComplete] = useState(true);
  const [visibleTodos, setVisibleTodos] = useState(todos);
  const [displayByUsername, setDisplayByUsername] = useState(true);
  const [visibleTodosByUser, setVisibleTodosByUser] = useState<VisibleTodosByUser>({});

  useEffect(() => {
    let resultList = todos;
    if (!showComplete) {
      resultList = todos.filter(todo => !todo.complete);
    }

    if (displayByUsername) {
      const result: VisibleTodosByUser = {};
      for (const todo of resultList) {
        if (result[todo.username]) {
          result[todo.username].push(todo);
        } else {
          result[todo.username] = [todo];
        }  
      }
      setVisibleTodosByUser(result);
    } else {
      setVisibleTodos(resultList);
    }

  }, [todos, showComplete, displayByUsername]);

  const handleAddTodo = (todo: TodoType) => {
    setTodos([todo].concat(todos));
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

      setTodos(newTodos);
  };

  const handleSortTodos = (typeOfOrdenation: 'ASC' | 'DESC') => {
    todos.sort((a, b) =>  a.dueDate - b.dueDate);
    if (typeOfOrdenation === 'ASC') {
      setVisibleTodos(todos.slice());
    } else {
      setVisibleTodos(todos.slice().reverse());
    }
  };

  return (
    <div className="todo-list-container">
      <h1 className="app-title">
        Todo List
      </h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <Filters
        showComplete={showComplete}
        onSortTodos={handleSortTodos}
        displayByUsername={displayByUsername}
        onShowCompleteClick={() => setShowComplete(!showComplete)}
        onByUsernameClick={() => setDisplayByUsername(!displayByUsername)}
      />
      {displayByUsername ? (
        <>
          {Object.keys(visibleTodosByUser).map((username) => (
            <List
              key={username}
              title={username}
              showTodoUsername={false}
              onTodoClick={handleTodoClick}
              todos={visibleTodosByUser[username]}
            />
          ))}
        </>
      ) : (
        <List
          todos={visibleTodos}
          onTodoClick={handleTodoClick}
        />
      )}
    </div>
  );
}
