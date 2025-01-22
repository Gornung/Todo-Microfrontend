import { Todo } from '../../shared/types/todo';

export const todos: Todo[] = [
  'NestJS',
  'GraphQL',
  'Apollo',
  'TypeScript',
  'React',
  'Svelte',
  'SolidJS',
  'NextJS',
  'AWS',
].map((text, index) => ({
  id: index + 1,
  title: `Learn ${text}`,
  done: false,
  active: true,
}));
