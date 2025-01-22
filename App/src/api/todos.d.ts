export declare const API_SERVER = "http://localhost:8080";
import { Todo } from 'server/dist/shared/types/todo';
export type { Todo };
export declare const getTodos: () => Promise<any>;
export declare const getTodoById: (id: number) => Promise<any>;
