import { Component, Injectable } from '@angular/core';
import UserModel from '../models/UserModel'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from "@angular/router";

let inputPhoto = document.getElementById('file-input');
@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', './fonts/stylesheet.css'],
})


@Injectable()
export class LoginComponent {
  user: UserModel;
  $inject = ['$location', 'loginSrv', 'notify'];

    constructor(private http: Http, private router: Router) {
      this.user = new UserModel();
    }

    save() {
    console.log(this.user);
    this.http.post("https://dietify-api.herokuapp.com/api/user/",this.user).subscribe(res => 
      {
        console.log(res.json());
        localStorage.setItem('token', res.json().token);
      });
      
    this.router.navigate(['/diet']);
  }
}
