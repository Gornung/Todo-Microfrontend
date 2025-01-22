import React, { useEffect, useState } from 'react';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Todo } from '../../types';
import TodosApi from 'app/TodosApi';

import styles from './TodoForm.module.scss';
import { useParams } from 'react-router-dom';
import { Button } from '../Button/Button';

const { getTodoById } = TodosApi;

export const TodoForm = (): React.JSX.Element | null => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getTodoById(id).then(setTodo);
    } else {
      setTodo(null);
    }
  }, []);

  if (!todo) {
    return null;
  }

  return (
    <>
      <div className={styles.form}>
        <Input
          className={styles.title}
          placeholder="Titel der Aufgabe"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        >
          {todo.title}
        </Input>
        <Textarea
          placeholder="Beschreibung der Aufgabe"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        >
          {todo.description}
        </Textarea>
      </div>
      <div className={styles.buttonContainer}>
        <Button>Speichern</Button>
        <Button variant="secondary">Zurück</Button>
      </div>
    </>
  );
};
