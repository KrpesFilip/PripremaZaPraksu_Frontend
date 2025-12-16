import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchUsers(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => this.usersSubject.next(users));
  }

  addUser(user: User): void {
    const current = this.usersSubject.getValue();
    const newUser = { ...user, id: current.length + 1 };
    this.usersSubject.next([...current, newUser]);
  }
}
