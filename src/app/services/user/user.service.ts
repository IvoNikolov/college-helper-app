import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = new BehaviorSubject<User[]>([
    new User('U1', 'Dave', '819497737'),
    new User('U2', 'Tim', '819497937'),
    new User('U2', 'Jack', '707692537')
  ]);

  get events() {
      return this._users.asObservable();

  }


  constructor() { }

  getUser(id: string) {

  }
}
