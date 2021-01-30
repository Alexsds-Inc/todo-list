import {Component, OnInit} from '@angular/core';
import {AuthService} from '@shared/services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDeleteProfileComponent} from '../confirm-delete-profile/confirm-delete-profile.component';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {User} from '@shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.getAuthorizedUser().subscribe((user) => {
      if (!user) {
        return;
      }

      this.user = user;
    });
  }

  onClickDelete(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteProfileComponent, {
      width: '50vw',
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.authService.delete().subscribe((result) => {
          if (result) {
            this.router.navigate(['/']);
            this.snackBar.open('Profile deleted');
          }
        });
      }
    });
  }
}
