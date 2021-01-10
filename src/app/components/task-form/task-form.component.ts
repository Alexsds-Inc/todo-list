import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AddTaskComponent} from '../add-task/add-task.component';
import {Todo} from '@shared/models/todo.model';
import {TodoService} from '@shared/services/todo.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  task: string;

  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addTask(): void {
    this.todoService.addTask(this.task);
  }
}
