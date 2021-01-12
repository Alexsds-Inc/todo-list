import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TaskFormComponent} from '../task-form/task-form.component';
import {TodoService} from '@shared/services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  task: string;

  constructor(private dialog: MatDialog, private todoService: TodoService) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      minWidth: '50vw',
    });

    dialogRef.afterClosed().subscribe((task) => {
      if (task) {
        this.todoService.addTask(task);
      }
    });
  }
}
