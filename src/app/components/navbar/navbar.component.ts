import {Component, OnInit} from '@angular/core';
import {AuthService} from '@shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  authorized = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.isAuthorized().subscribe((result) => {
      this.authorized = result;
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('login');
    });
  }
}
