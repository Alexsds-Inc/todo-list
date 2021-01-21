import {Component, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TaskFormComponent} from '../task-form/task-form.component';
import {TodoService} from '@shared/services/todo.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  task: string;
  isAdd: boolean;

  constructor(private dialog: MatDialog, private todoService: TodoService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.isAdd = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      minWidth: '50vw',
      data: {task: 'jsahdfjkhads'},
    });

    dialogRef.afterClosed().subscribe((task) => {
      console.log(task);
      if (task) {
        this.todoService.addTask(task).subscribe(() => {
          this.snackBar.open('Task added');
        });
      }
    });
  }
}
