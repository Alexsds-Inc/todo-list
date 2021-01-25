import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import {User} from '@shared/models/user.model';
import {AuthService} from '@shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error = false;
  hide = true;
  submitted: boolean;

  constructor(public authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    if (f.invalid) {
      return;
    }

    const user: User = {
      name: f.value.name,
      email: f.value.email,
      password: f.value.password,
    };

    this.error = false;

    this.authService.register(user).subscribe((result) => {
      if (result) {
        f.reset();
        this.router.navigate(['/login']);
        this.snackBar.open('User registered');
      }

      this.error = true;
      this.snackBar.open('This email is busy');
    });
  }
}
