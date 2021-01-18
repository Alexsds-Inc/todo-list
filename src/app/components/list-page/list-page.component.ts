import {Component, OnInit} from '@angular/core';
import {TodoService} from '@shared/services/todo.service';
import {Todo} from '@shared/models/todo.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  title = 'To Do List';
  todoList: Todo[] = [];

  constructor(private todoService: TodoService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.todoService.getList().subscribe((list) => {
      this.todoList = list;
    });
  }

  complete(id: number): void {
    setTimeout(() => {
      this.todoService.complete(id);
    }, 500);

    this.snackBar.open('Task completed', '', {
      duration: 2000,
    });
  }
}
