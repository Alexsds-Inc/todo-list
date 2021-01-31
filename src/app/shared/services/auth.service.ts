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
        id: 1,
        name: 'Alex',
        email: 'auth@mail.ru',
        password: '12',
      },
      {
        id: 2,
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

  register(name: string, email: string, password: string): Observable<boolean> {
    const users = this.users.getValue();
    const item = !!users.find((i) => i.email === email);
    if (item) {
      return of(false);
    }
    const user = {
      id: this.getNextId(),
      name,
      email,
      password,
    };

    users.push(user);
    this.users.next(users);

    return of(true);
  }

  login(name: string, password: string): Observable<boolean> {
    const users = this.users.getValue();
    const authUser = users.find((i) => (i.email === name || i.name === name) && i.password === password);
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

  delete(id: number): Observable<boolean> {
    const authUser = this.authorizedUser.getValue();
    if (authUser && authUser.id === id) {
      const users = this.users.getValue();
      const index = users.findIndex((u) => u.id === id);
      if (index > -1) {
        users.splice(index, 1);
      }
      this.users.next(users);
      this.authorized.next(false);
      return of(true);
    }

    return of(false);
  }

  protected getNextId(): number {
    const users = this.users.getValue();
    const lastId = Math.max.apply(
      Math,
      users.map((u: User) => u.id)
    );

    return lastId + 1;
  }
}
