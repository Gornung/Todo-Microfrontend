import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.scss';
import { Todo } from 'shared-types';
import { getTodos } from 'portal/TodosApi';

import { ListElement } from './components/ListElement/ListElement';

export const TodoList = (): React.JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Aufgaben Überblick</h1>
      {todos.length <= 0 ? (
        <p className={styles.emptyMessage}>Keine Todos vorhanden!</p>
      ) : (
        <ul className={styles.list}>
          {todos.map((todo: Todo) => (
            <ListElement todo={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
