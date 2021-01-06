import {Injectable} from '@angular/core';
import {Todo} from '../interfaces/todo.interface';

@Injectable()
export class TodoService {
  todoList: Todo[] = [
    {
      id: 1,
      task: 'Drink coffee',
      complete: false,
    },
    {
      id: 2,
      task: 'Create app',
      complete: false,
    },
    {
      id: 3,
      task: 'Angular is amazing framework',
      complete: false,
    },
  ];

  constructor() {}

  getAll(): Todo[] {
    return this.todoList;
  }
}
