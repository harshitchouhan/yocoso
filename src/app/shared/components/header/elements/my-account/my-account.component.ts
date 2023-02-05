import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/firebase/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  public userName: string;
  public profileImg: 'assets/images/dashboard/profile.jpg';

  constructor(public authService: AuthService) {

    if (JSON.parse(localStorage.getItem('user'))) {
      console.log("true");
    } else {
      console.log("NO ");
    }

  }


  logoutFunc() {
    this.authService.SignOut();
  }

  ngOnInit() {
  }

}
