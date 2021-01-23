import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '@shared/models/user.model';

@Injectable()
export class AuthService {
  private users = new BehaviorSubject<User[]>([]);

  constructor() {
    this.users.next([
      {
        name: 'Alex',
        email: 'auth@mail.ru',
        password: '123456',
      },
      {
        name: 'Korol',
        email: 'login@mail.ru',
        password: '654321',
      },
    ]);
  }

  register(user: User): Observable<boolean> {
    const users = this.users.getValue();
    const item = !!users.find((i) => i.email === user.email);
    if (item) {
      return of(false);
    }

    users.push(user);
    this.users.next(users);

    return of(true);
  }

  login(user: User): Observable<boolean> {
    const users = this.users.getValue();
    const item = !!users.find((i) => (i.email === user.name || i.name === user.name) && i.password === user.password);
    if (!item) {
      return of(false);
    }

    return of(true);
  }
}
