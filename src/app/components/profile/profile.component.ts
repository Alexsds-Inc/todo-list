import {Component, OnInit} from '@angular/core';
import {AuthService} from '@shared/services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDeleteProfileComponent} from '../confirm-delete-profile/confirm-delete-profile.component';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;

  constructor(private authService: AuthService, public dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.authService.getAuthorizedUser().subscribe((user) => {
      if (!user) {
        return;
      }

      this.name = user.name;
      this.email = user.email;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteProfileComponent, {
      width: '50vw',
      data: {name: this.name, email: this.email},
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.authService.delete();
        this.router.navigate(['/registration']);
        this.snackBar.open('Profile deleted');
      }
    });
  }
}
