import { Todo } from 'server/dist/shared/types/todo';

export type { Todo };
export type GetTodoById = (id: number) => Promise<Todo>;
export type GetTodos = () => Promise<Todo[]>;
