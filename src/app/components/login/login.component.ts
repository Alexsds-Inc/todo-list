import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

import {User} from '@shared/models/user.model';
import {AuthService} from '@shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error = false;
  hide = true;

  constructor(public authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    if (f.invalid) {
      return;
    }

    const user: User = {
      email: f.value.email,
      password: f.value.password,
    };

    this.error = false;

    this.authService.login(user).subscribe((result) => {
      if (result) {
        f.reset();
        this.router.navigate(['/list']);
        this.snackBar.open('User authorized');
      } else {
        this.error = true;
      }
    });
  }
}
