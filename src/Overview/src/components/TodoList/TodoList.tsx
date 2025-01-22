import React from 'react';
import styles from './TodoList.module.scss';
import { Todo } from 'shared-types';
import { useTodos } from 'elements/TodoContext';
import { ListElement } from './components/ListElement/ListElement';
import { AddTodoButton } from './components/AddTodoButton/AddTodoButton';

export const TodoList = (): React.JSX.Element => {
  const { todos: allTodos, deleteTodo, updateTodo } = useTodos();

  const activeTodos = allTodos.filter((todo: Todo) => todo.active);

  const handleDelete = (id: number) => {
    deleteTodo(id).then(() => {});
  };

  const handleFinish = (id: number, updatedTodo: Todo) => {
    updateTodo(id, updatedTodo);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Aufgaben Überblick</h1>
      {activeTodos.length <= 0 ? (
        <>
          <p className={styles.emptyMessage}>Keine Aufgaben vorhanden!</p>
          <AddTodoButton />
        </>
      ) : (
        <ul className={styles.list}>
          {activeTodos.map((todo: Todo) => (
            <ListElement
              todo={todo}
              key={todo.id}
              onDelete={handleDelete}
              onFinish={handleFinish}
            />
          ))}
          <AddTodoButton />
        </ul>
      )}
    </div>
  );
};
