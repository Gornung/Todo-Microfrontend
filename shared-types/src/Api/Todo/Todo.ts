export interface Todo {
    id: number;
    title: string;
    description?: string;
    done: boolean;
    active: boolean;
}

export type CreateTodo = Omit<Todo, 'id'>;