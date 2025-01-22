import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  Logger,
} from '@nestjs/common';
import { Todo } from 'shared-types';

export let todos: Todo[] = [
  'NestJS',
  'GraphQL',
  'TypeScript',
  'React',
  'Svelte',
  'SolidJS',
  'NextJS',
  'Micro Frontends',
  'Webpack - module federation',
].map((text, index) => ({
  id: index + 1,
  title: `Learn ${text}`,
  done: false,
  active: true,
}));

todos = [
  ...todos,
  { id: 10, title: 'Erledigt inaktiv', active: false, done: true },
  { id: 11, title: 'Sport machen', active: true, done: true },
];

@Controller('todos')
export class TodosController {
  constructor() {}

  private readonly logger = new Logger(TodosController.name);

  @Get('all')
  async getAllTodos(): Promise<Todo[]> {
    return todos;
  }

  @Get()
  async index(): Promise<Todo[]> {
    return todos.filter(({ active }) => active);
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Todo> {
    return todos.find((todo) => todo.id === parseInt(id));
  }

  @Post()
  async create(
    @Body()
    {
      title,
      description,
    }: {
      title: Todo['title'];
      description: Todo['description'];
    },
  ): Promise<Todo> {
    const todo: Todo = {
      id: todos.length + 1,
      title,
      description,
      done: false,
      active: true,
    };
    this.logger.log('created', { todo });
    todos.push(todo);
    return todo;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Todo): Promise<Todo> {
    const updatedTodos = todos.map((todo) =>
      todo.id === parseInt(id) ? { ...todo, ...data } : todo,
    );

    // Ersetze das ursprüngliche Array durch die aktualisierten Todos
    todos.length = 0;
    todos.push(...updatedTodos);

    return data;
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<number> {
    todos = todos.map((todo) =>
      todo.id === parseInt(id) ? { ...todo, active: false } : todo,
    );

    this.logger.log(`delete TodosID: ${JSON.stringify(todos[id])}`);

    return parseInt(id);
  }
}
