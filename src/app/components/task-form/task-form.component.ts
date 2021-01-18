import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AddTaskComponent} from '../add-task/add-task.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  task: string;

  constructor(public dialogRef: MatDialogRef<AddTaskComponent>, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(): void {
    this.snackBar.open('Task added', '', {
      duration: 2000,
    });
  }
}
