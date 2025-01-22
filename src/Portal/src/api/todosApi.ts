import { GetTodoById, GetTodos, Todo } from 'shared-types';
import { API_SERVER } from '../../constants';

export const getTodoById: GetTodoById = async (id: string) => {
  const response = await fetch(`${API_SERVER}/todos/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Todos');
  }

  return response.json();
};

export const getAllTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${API_SERVER}/todos/all`);
  if (!response.ok) {
    throw new Error('Failed to fetch all Todos');
  }

  return response.json();
};

export const getTodos: GetTodos = async () => {
  const response = await fetch(`${API_SERVER}/todos`);
  if (!response.ok) {
    throw new Error('Failed to fetch specific Todos');
  }

  return await response.json();
};

export const updateTodo = async (
  id: string,
  updatedTodo: Partial<Todo>,
): Promise<Todo> => {
  const response = await fetch(`${API_SERVER}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTodo),
  });

  if (!response.ok) {
    throw new Error(`Failed to update Todo with ID ${id}`);
  }

  return response.json();
};

export const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(`${API_SERVER}/todos/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to delete Todo with ID ${id}`);
  }
};

export const createTodo = async (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
  const response = await fetch(`${API_SERVER}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) {
    throw new Error('Failed to create Todo');
  }

  return response.json();
};
