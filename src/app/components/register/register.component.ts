import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.error = false;

    this.authService.register(form.value.name, form.value.email, form.value.password).subscribe((result) => {
      if (result) {
        form.reset();
        this.router.navigate(['/login']);
        this.snackBar.open('User registered');
      }

      this.error = true;
      this.snackBar.open('This email is busy');
    });
  }
}
