import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from './service/authentication.service';
// import { Role } from './models/role';
// import { User } from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular-login-page';
  currentUser: any;

  constructor(
    private router: Router,

  ) {
   // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  // get isAdmin() {
  //   return this.currentUser && this.currentUser.role === Role.Admin;
  // }
  //
  // logout() {
  //   this.authenticationService.logout();
  //   this.router.navigate(['/login']);
  // }
}
