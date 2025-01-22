import {Todo} from "./Todo";

export type GetTodoById = (id: string) => Promise<Todo>;
export type GetTodos = () => Promise<Todo[]>;