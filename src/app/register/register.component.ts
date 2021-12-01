import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
// import { AuthenticationService } from "../service/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userData:any;
  value = "";
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }
  signUp(data: any) {

    this.user.changeData(data);
  }
  register(data: any) {
    this.user.changeData(data);
  }
}
