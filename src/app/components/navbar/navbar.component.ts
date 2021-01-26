import {Component, OnInit} from '@angular/core';
import {AuthService} from '@shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  authorized = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isAuthorized().subscribe((result) => {
      this.authorized = result;
    });
  }
}
