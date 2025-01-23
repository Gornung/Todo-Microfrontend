import React from 'react';
import styles from './ListElement.module.scss';
import { Todo } from 'server/dist/shared/types/todo';

interface ListElementProps {
  todo: Todo;
}

export const ListElement = ({ todo }: ListElementProps): React.JSX.Element => {
  const handleClick = (todo: Todo) => {
    return console.log({ todo });
  };

  return (
    <li
      key={todo.id}
      className={`${styles.item} ${todo.done ? styles.done : ''}`}
      onClick={() => handleClick(todo)}
    >
      <span className={styles.text}>{todo.title}</span>
      {todo.done && <span className={styles.badge}>Done</span>}
    </li>
  );
};
