// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
//
// import { map } from 'rxjs/operators';
// import { User } from '../models/user';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {
//   private currentUserSubject: any;
//   // public currentUser: any;
//   public currentUser: any;
//
//   constructor(private http: HttpClient) {
//     this.currentUserSubject =JSON.parse(localStorage.getItem('currentUser')||'');
//     this.currentUser = this.currentUserSubject||{};
//   }
//   // private currentUserSubject: BehaviorSubject<User>;
//   //   public currentUser: Observable<User>;
//   //
//   //   constructor(private http: HttpClient) {
//   //       this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
//   //       this.currentUser = this.currentUserSubject.asObservable();
//   //   }
//   public get currentUserValue() {
//     return this.currentUserSubject.value;
//   }
//
//   login(username: string, password: string) {
//     return this.http.post<any>(`/users/authenticate`, { username, password })
//       .pipe(map(user => {
//
//         if (user && user.token) {
//           localStorage.setItem('currentUser', JSON.stringify(user));
//           this.currentUserSubject.next(user);
//         }
//         return user;
//       }));
//   }
//
//   logout() {
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
//   }
// }
