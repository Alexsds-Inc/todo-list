import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.error = false;

    this.authService.login(form.value.name, form.value.password).subscribe((result) => {
      if (result) {
        form.reset();
        this.router.navigate(['/list']);
        this.snackBar.open('User authorized');
      }

      this.error = true;
    });
  }
}
