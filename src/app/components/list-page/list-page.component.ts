import {Component, OnInit} from '@angular/core';
import {TodoService} from '@shared/services/todo.service';
import {Todo} from '@shared/models/todo.model';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  title = 'To Do List';
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getList().subscribe((list) => {
      this.todoList = list;
    });
  }

  complete(id: number): void {
    setTimeout(() => {
      this.todoService.complete(id);
    }, 500);
  }
}
