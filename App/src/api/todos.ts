import { GetTodoById, GetTodos, Todo } from '../types';
import { API_SERVER } from '../../constants';

const getTodoById: GetTodoById = async (id: Todo['id']) => {
  const response = await fetch(`${API_SERVER}/todos/${id}`);
  return response.json();
};

const getTodos: GetTodos = async () => {
  const response = await fetch(`${API_SERVER}/todos`);
  return await response.json();
};

export default { getTodos, getTodoById };

export type { Todo };
