import React, { useEffect, useState } from 'react';
import { CreateTodo, Todo } from 'shared-types';
import { Button, Input, Textarea } from 'elements/Elements';
import { useTodos } from 'elements/TodoContext';

import styles from './TodoForm.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

const initTodo: CreateTodo = {
  title: '',
  description: '',
  done: false,
  active: true,
};

const TodoForm = (): React.JSX.Element => {
  const { todos, updateTodo, createTodo } = useTodos();

  const navigate = useNavigate();
  const { id } = useParams();
  const isValidNumber = !isNaN(parseInt(id || ''));

  const [todo, setTodo] = useState<CreateTodo>(initTodo);

  useEffect(() => {
    const foundTodo = todos.find(
      (todo: Todo) => todo.id === parseInt(id || ''),
    );

    if (foundTodo) {
      setTodo(foundTodo);
    }
  }, [todos]);

  const handleBackToHomePage = () => {
    navigate('/');
  };

  const handleSave = async () => {
    if (todo?.title) {
      if (id && isValidNumber) {
        await updateTodo(id, todo as Todo);
      } else {
        await createTodo(todo as Omit<Todo, 'id'>);
      }
      handleBackToHomePage();
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
        <Button onSave={handleSave} id="save">Speichern</Button>
        <Button variant="secondary" onClick={handleBackToHomePage} id="back">
          Zurück
        </Button>
      </div>
    </>
  );
};

export default TodoForm;
