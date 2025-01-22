import React from 'react';
import { Button } from 'elements/Elements';
import styles from './AddTodoButton.module.scss';
import { useNavigate } from 'react-router-dom';

export const AddTodoButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/todo/new');
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleClick} className={styles.button} id='new-todo'>
        neue Aufgabe hinzufügen
      </Button>
    </div>
  );
};
