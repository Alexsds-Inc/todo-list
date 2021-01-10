import {Injectable} from '@angular/core';
import {Todo} from '@shared/models/todo.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class TodoService {
  private incomplete = new BehaviorSubject<Todo[]>([]);
  private completed = new BehaviorSubject<Todo[]>([]);

  constructor() {
    this.incomplete.next([
      {
        id: 1,
        task: 'Drink coffee',
        complete: false,
      },
      {
        id: 3,
        task: 'Angular is amazing framework',
        complete: false,
      },
    ]);
    this.completed.next([
      {
        id: 2,
        task: 'Create app',
        complete: true,
      },
    ]);
  }

  getList(): Observable<Todo[]> {
    return this.incomplete.asObservable();
  }

  getCompleted(): Observable<Todo[]> {
    return this.completed.asObservable();
  }

  addTask(task: string): Todo {
    const todos = this.incomplete.getValue();
    const todo: Todo = {
      id: todos.length,
      task,
      complete: false,
    };
    todos.push(todo);
    this.incomplete.next(todos);

    return todo;
  }
}
