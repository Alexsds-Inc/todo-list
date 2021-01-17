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
    const todosIncomplete = this.incomplete.getValue();
    const todo: Todo = {
      id: this.getNextId(),
      task,
      complete: false,
    };
    todosIncomplete.push(todo);
    this.incomplete.next(todosIncomplete);

    return todo;
  }

  complete(id: number): void {
    const todosIncomplete = this.incomplete.getValue();
    const todo = todosIncomplete.find((item) => id === item.id);
    if (!todo) {
      return;
    }

    const newTodos = todosIncomplete.filter((item) => id !== item.id);
    this.incomplete.next(newTodos);

    const todosCompleted = this.completed.getValue();
    todo.complete = true;
    todosCompleted.push(todo);
    this.completed.next(todosCompleted);
  }

  protected getNextId(): number {
    const todosIncomplete = this.incomplete.getValue();
    const todosCompleted = this.completed.getValue();
    const todos = todosIncomplete.concat(todosCompleted);

    const lastId = Math.max.apply(
      Math,
      todos.map((o: Todo) => o.id)
    );

    return lastId + 1;
  }

  inComplete(id: number): void {
    const todosComplete = this.completed.getValue();
    const todo = todosComplete.find((item) => id === item.id);
    console.log(todo);
    if (!todo) {
      return;
    }

    const newTodos = todosComplete.filter((item) => id !== item.id);
    this.completed.next(newTodos);

    const todosIncomplete = this.incomplete.getValue();
    todo.complete = false;
    todosIncomplete.push(todo);
    this.incomplete.next(todosIncomplete);
  }
}
