import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from '../shared/services/auth.service';
import { Network } from '@ionic-native/network';
import { ToastController, IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html'
})
export class UnauthorizedComponent implements OnInit {

  constructor(private authService: AuthService, private location:Location, private network: Network, public toastCtrl: ToastController) { }

  ngOnInit() {
  }
  Login() {

    var networkState = this.network.type;
    if (networkState !== 'none') {

      this.authService.startSigninMainWindow();
    } else {
      this.toastCtrl.create({
        message: 'Impossible to Login without Internet connection!',
        duration: 3000
      }).present();
    }

  }
  goback(){
    this.location.back();
  }
}
