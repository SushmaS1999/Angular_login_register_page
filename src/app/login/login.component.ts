import { Component, OnInit} from '@angular/core';
import { UserService } from "../service/user.service";
// import { AuthenticationService } from "../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
event: any;
  userData: any;
  constructor(private user: UserService) {}


  ngOnInit() {
    this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event: any) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login(data: any) {
    this.user.changeData(data);
  }
}
