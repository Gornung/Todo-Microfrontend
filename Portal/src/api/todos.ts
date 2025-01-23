import { GetTodoById, GetTodos, Todo } from 'shared-types';
import { API_SERVER } from '../../constants';

const getTodoById: GetTodoById = async (id: string) => {
  const response = await fetch(`${API_SERVER}/todos/${id}`);
  return response.json();
};

const getTodos: GetTodos = async () => {
  const response = await fetch(`${API_SERVER}/todos`);
  return await response.json();
};

const updateTodo = async (
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

const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(`${API_SERVER}/todos/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to delete Todo with ID ${id}`);
  }
};

const createTodo = async (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
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

export default { getTodos, getTodoById, updateTodo, deleteTodo, createTodo };
