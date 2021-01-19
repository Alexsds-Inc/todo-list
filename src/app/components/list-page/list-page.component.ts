import {Component, OnInit} from '@angular/core';
import {TodoService} from '@shared/services/todo.service';
import {Todo} from '@shared/models/todo.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TaskFormComponent} from '../task-form/task-form.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  title = 'To Do List';
  todoList: Todo[] = [];
  task: string;

  constructor(private dialog: MatDialog, private todoService: TodoService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.todoService.getList().subscribe((list) => {
      this.todoList = list;
    });
  }

  complete(id: number): void {
    setTimeout(() => {
      this.todoService.complete(id).subscribe((result) => {
        if (result) {
          this.snackBar.open('Task completed');
        }
      });
    }, 500);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      minWidth: '50vw',
      data: {task: this.task}
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
