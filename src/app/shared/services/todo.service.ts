import {Injectable} from '@angular/core';
import {Todo} from '@shared/models/todo.model';

@Injectable()
export class TodoService {
  private todoList: Todo[] = [
    {
      id: 1,
      task: 'Drink coffee',
      complete: false,
    },
    {
      id: 2,
      task: 'Create app',
      complete: true,
    },
    {
      id: 3,
      task: 'Angular is amazing framework',
      complete: false,
    },
  ];

  constructor() {}

  getList(): Todo[] {
    return this.todoList.filter((todo) => todo.complete === false);
  }

  getCompleted(): Todo[] {
    return this.todoList.filter((todo) => todo.complete === true);
  }

  addTask(task: string): Todo {
    const id = this.todoList.length;
    const todo: Todo = {
      id,
      task,
      complete: false,
    };
    this.todoList.push(todo);

    return todo;
  }
}
