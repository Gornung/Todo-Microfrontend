import { Todo } from 'server/dist/shared/types/todo';

export type { Todo };
export type GetTodoById = (id: string) => Promise<Todo>;
export type GetTodos = () => Promise<Todo[]>;
