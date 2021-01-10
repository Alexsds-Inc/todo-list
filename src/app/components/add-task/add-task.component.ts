import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TaskFormComponent} from '../task-form/task-form.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      minWidth: '50vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
