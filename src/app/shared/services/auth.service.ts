import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '@shared/models/user.model';

@Injectable()
export class AuthService {
  private users = new BehaviorSubject<User[]>([]);

  constructor() {
    this.users.next([
      {
        email: 'auth@mail.ru',
        password: '123456',
      },
      {
        email: 'login@mail.ru',
        password: '654321',
      },
    ]);
  }

  login(user: User): Observable<boolean> {
    const users = this.users.getValue();
    const item = !!users.find((i) => i.email === user.email && i.password === user.password);
    if (!item) {
      return of(false);
    }

    return of(true);
  }
}
