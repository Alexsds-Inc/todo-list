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
    const todosIncomlete = this.incomplete.getValue();
    const todosCompleted = this.completed.getValue();
    const todo: Todo = {
      id: todosIncomlete.length + todosCompleted.length + 1,
      task,
      complete: false,
    };
    todosIncomlete.push(todo);
    this.incomplete.next(todosIncomlete);

    return todo;
  }
}
