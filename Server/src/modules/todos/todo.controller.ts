import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
} from '@nestjs/common';
import { Todo } from '../../shared/types/todo';
import { todos } from './todoExamples';

@Controller('todos')
export class TodosController {
  constructor() {}

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
    todos.push(todo);
    return todo;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Todo): Promise<Todo> {
    todos.map((todo) =>
      todo.id === parseInt(id) ? { ...todo, ...data } : todo,
    );

    return data;
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<number> {
    todos.map((todo) =>
      todo.id === parseInt(id) ? { ...todo, active: false } : todo,
    );

    return parseInt(id);
  }
}
