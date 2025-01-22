import React from 'react';
import styles from './ListElement.module.scss';
import { Todo } from 'shared-types';
import { Trash, Check } from 'elements/Icons';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

interface ListElementProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onFinish: (id: number, updateTodo: Todo) => void;
}

export const ListElement = ({
  todo,
  onDelete,
  onFinish,
}: ListElementProps): React.JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/todo/${todo.id}`);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleFinish = () => {
    onFinish(todo.id, { ...todo, done: !todo.done });
  };

  const checkedClasses = classNames(
    styles.checkedIcon,
    todo.done ? styles.done : '',
  );

  return (
    <div className={styles.container}>
      <li key={todo.id} className={styles.item} onClick={() => handleClick()} id={`list-element-${todo.id}`}>
        <span className={styles.text}>{todo.title}</span>
      </li>

      <div onClick={handleFinish} id={`check-icon-${todo.id}`}>
        <Check className={checkedClasses} />
      </div>

      <div onClick={handleDelete} id={`trash-icon-${todo.id}`}>
        <Trash className={styles.trash} />
      </div>
    </div>
  );
};
