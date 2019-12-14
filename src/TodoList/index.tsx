// @ts-nocheck
import List from './List';
import AddTodo from './AddTodo';
import { TODOS } from '../mock';
import Filters from './Filters';
import { TodoType } from './Todo';
import React, { useState, useEffect } from 'react';
import { filter, whereEq, ifElse, identity, prop, groupBy, sortBy, reverse, pipe } from 'ramda';

interface VisibleTodosByUser {
  [key: string]: TodoType[];
}

const filterIncomplete = filter(whereEq({ complete: false }));
const groupByUser = groupBy(prop('username'));
const sortByDate = sortBy(prop('dueDate'));
const sortByDateDesc = pipe(sortByDate, reverse);

export default function TodoList() {
  const [todos, setTodos] = useState(TODOS);
  const [showComplete, setShowComplete] = useState(true);
  const [visibleTodos, setVisibleTodos] = useState(todos);
  const [displayByUsername, setDisplayByUsername] = useState(false);
  const [visibleTodosByUser, setVisibleTodosByUser] = useState<VisibleTodosByUser>({});

  useEffect(() => {
    const resultList = ifElse(() => !showComplete, filterIncomplete, identity)(todos);
    const result =  ifElse(() => displayByUsername, groupByUser, identity)(resultList);
    ifElse(() => displayByUsername, setVisibleTodosByUser, setVisibleTodos)(result);
    // if (displayByUsername) {
    //   const result: VisibleTodosByUser = {};
    //   for (const todo of resultList) {
    //     if (result[todo.username]) {
    //       result[todo.username].push(todo);
    //     } else {
    //       result[todo.username] = [todo];
    //     }  
    //   }
    //   setVisibleTodosByUser(result);
    // } else {
    //   setVisibleTodos(resultList);
    // }

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
    // todos.sort((a, b) =>  a.dueDate - b.dueDate);
    // if (typeOfOrdenation === 'ASC') {
    //   setVisibleTodos(todos.slice());
    // } else {
    //   setVisibleTodos(todos.slice().reverse());
    // }
    // dsfs

    const orderedTodos = ifElse(
      () => typeOfOrdenation === 'ASC',
      sortByDate,
      sortByDateDesc
    )(todos);
    setVisibleTodos(orderedTodos.slice());
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
