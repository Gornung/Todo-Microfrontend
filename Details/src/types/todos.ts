export type Todo = {
  id: number;
  title: string;
  description?: string;
  done: boolean;
  active: boolean;
};

export type GetTodoById = (id: number) => Promise<Todo>;
export type GetTodos = () => Promise<Todo[]>;
