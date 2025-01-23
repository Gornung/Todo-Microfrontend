import React, { useEffect, useState } from 'react';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Todo } from '../../types';
import TodosApi from 'app/TodosApi';

import styles from './TodoForm.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../Button/Button';

const { getTodoById, updateTodo, createTodo } = TodosApi;

type TodoOption = Omit<Todo, 'id'> & { id?: number };

const initTodo = {
  title: '',
  description: '',
  done: false,
  active: true,
};

export const TodoForm = (): React.JSX.Element => {
  const [todo, setTodo] = useState<TodoOption>(initTodo);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getTodoById(id).then((fetchedTodo: Todo) => {
        setTodo(fetchedTodo || initTodo);
      });
    }
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = async () => {
    if (todo?.title) {
      if (id) {
        await updateTodo(id, todo as Todo);
        console.log('Todo updated:', todo);
      } else {
        const newTodo = await createTodo(todo as Omit<Todo, 'id'>);
        console.log('Todo created:', newTodo);
      }
      // navigate(-1);
    } else {
      alert('Bitte einen Titel eingeben!');
    }
  };

  const handleChange =
    (field: keyof TodoOption) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTodo((prev) => ({
        ...(prev || initTodo),
        [field]: e.target.value,
      }));
    };

  return (
    <>
      <div className={styles.form}>
        <Input
          className={styles.title}
          placeholder="Titel der Aufgabe"
          value={todo.title}
          onChange={(e) => handleChange('title')(e)}
        />
        <Textarea
          placeholder="Beschreibung der Aufgabe"
          value={todo.description || ''}
          onChange={(e) => handleChange('description')(e)}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button onSave={handleSave}>Speichern</Button>
        <Button variant="secondary" onClick={handleBack}>
          Zurück
        </Button>
      </div>
    </>
  );
};
