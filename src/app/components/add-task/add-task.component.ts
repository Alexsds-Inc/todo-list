import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ButtonAddComponent} from '../button-add/button-add.component';
import {Todo} from '@shared/models/todo.model';
import {TodoService} from '@shared/services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  task: string;

  constructor(
    public dialogRef: MatDialogRef<ButtonAddComponent>,
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
