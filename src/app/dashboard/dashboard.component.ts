import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
