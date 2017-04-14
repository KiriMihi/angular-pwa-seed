import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from '../shared/services/auth.service';
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: './app-protected',
  templateUrl: 'protected.component.html'
})
export class ProtectedComponent implements OnInit {

  get name() { return this.authService.currentUser.profile.name };

  get loggedIn() { return this.authService.loggedIn };

  get accessToken() { return this.authService.currentUser.access_token };

  constructor(private location:Location, private authService: AuthService) { }

  ngOnInit() {
  }
  goback(){
    this.location.back();
  }

}
