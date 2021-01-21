import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() todo: Todo;
  task: string;
  isAdd: boolean;

  @Output() toggle = new EventEmitter<number>();

  constructor(private dialog: MatDialog, private todoService: TodoService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.isAdd = true;
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

  onToggle(id: number): void {
    this.toggle.emit(id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      minWidth: '50vw',
      data: {task: this.task},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.task = result;
    });
  }
}
