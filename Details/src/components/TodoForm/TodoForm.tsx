import React, { useEffect, useState } from 'react';
import { CreateTodo, Todo } from 'shared-types';
import { Button, Input, Textarea } from 'elements/Elements';

import TodosApi from 'portal/TodosApi';

import styles from './TodoForm.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

const { getTodoById, updateTodo, createTodo } = TodosApi;

const initTodo: CreateTodo = {
  title: '',
  description: '',
  done: false,
  active: true,
};

export const TodoForm = (): React.JSX.Element => {
  const [todo, setTodo] = useState<CreateTodo>(initTodo);

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
    (field: keyof CreateTodo) =>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('title')(e)
          }
        />
        <Textarea
          placeholder="Beschreibung der Aufgabe"
          value={todo.description || ''}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleChange('description')(e)
          }
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
