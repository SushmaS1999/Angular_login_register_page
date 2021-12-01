import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { User } from '../models/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDataSource = new BehaviorSubject({ username: '', password: '' });
  currentUserData = this.userDataSource.asObservable();
  constructor() { }
  changeData(newUserData: any) {
    this.userDataSource.next(newUserData);
  }


}
