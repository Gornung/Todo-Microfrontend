import React, { createContext, useContext, useEffect, useState } from 'react';
import { Todo } from 'shared-types';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from 'portal/TodosApi';

const TodoContext = createContext<{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  fetchAllTodos: () => void;
  createTodo: (newTodo: Omit<Todo, 'id'>) => Promise<Todo>;
  updateTodo: (id: string, updatedTodo: Partial<Todo>) => Promise<Todo>;
  deleteTodo: (id: string) => Promise<void>;
}>({
  todos: [],
  setTodos: () => {},
  fetchAllTodos: async () => {},
  createTodo: async () => ({ id: 0, title: '', done: false, active: true }),
  updateTodo: async () => ({ id: 0, title: '', done: false, active: true }),
  deleteTodo: async () => {},
});

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchAllTodosFromApi = async () => {
    try {
      const todosData = await getAllTodos();
      setTodos(todosData);
    } catch (error) {
      console.error('Error fetching all todos', error);
    }
  };

  useEffect(() => {
    void fetchAllTodosFromApi();
  }, []);

  const createNewTodo = async (newTodo: Omit<Todo, 'id'>) => {
    try {
      const createdTodo = await createTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, createdTodo]);
      return createdTodo;
    } catch (error) {
      console.error('Error creating todo', error);
      throw error;
    }
  };

  const updateTodoInApi = async (id: string, updatedTodo: Partial<Todo>) => {
    try {
      const updatedTodoData = await updateTodo(id, updatedTodo);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === updatedTodoData.id ? updatedTodoData : todo,
        ),
      );
      return updatedTodoData;
    } catch (error) {
      console.error('Error updating todo', error);
      throw error;
    }
  };

  const deleteTodoInApi = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== parseInt(id)),
      );
      void fetchAllTodosFromApi();
    } catch (error) {
      console.error('Error deleting todo', error);
      throw error;
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        fetchAllTodos: fetchAllTodosFromApi,
        createTodo: createNewTodo,
        updateTodo: updateTodoInApi,
        deleteTodo: deleteTodoInApi,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
