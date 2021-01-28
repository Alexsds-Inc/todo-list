import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '@shared/models/dialog-data.model';

@Component({
  selector: 'app-confirm-delete-profile',
  templateUrl: './confirm-delete-profile.component.html',
  styleUrls: ['./confirm-delete-profile.component.scss']
})
export class ConfirmDeleteProfileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
