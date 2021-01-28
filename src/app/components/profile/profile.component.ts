import {Component, OnInit} from '@angular/core';
import {AuthService} from '@shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getAuthorizedUser().subscribe((user) => {
      if (!user) {
        return;
      }

      this.name = user.name;
      this.email = user.email;
    });
  }
}
