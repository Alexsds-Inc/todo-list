import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '@shared/models/user.model';

@Injectable()
export class AuthService {
  private users = new BehaviorSubject<User[]>([]);
  private authorized = new BehaviorSubject<boolean>(false);
  private authorizedUser = new BehaviorSubject<User | null>(null);

  constructor() {
    this.users.next([
      {
        name: 'Alex',
        email: 'auth@mail.ru',
        password: '12',
      },
      {
        name: 'Korol',
        email: 'login@mail.ru',
        password: '654321',
      },
    ]);
  }

  getAuthorizedUser(): Observable<User | null> {
    return this.authorizedUser.asObservable();
  }

  isAuthorized(): Observable<boolean> {
    return this.authorized.asObservable();
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
    const authUser = users.find((i) => (i.email === user.name || i.name === user.name) && i.password === user.password);
    if (authUser === undefined) {
      return of(false);
    }

    this.authorizedUser.next(authUser);
    this.authorized.next(true);
    return of(true);
  }

  logout(): Observable<boolean> {
    this.authorized.next(false);
    return this.authorized.asObservable();
  }

  delete(): Observable<boolean> {
    const users = this.users.getValue();
    const authUser = this.authorizedUser.getValue();
    if (users && authUser) {
      const newUsers = users.filter(
        (item) => item.name !== authUser.name && item.email !== authUser.email && item.password !== authUser.password,
      );
      this.users.next(newUsers);
      this.authorized.next(false);
    }

    return of(true);
  }
}
