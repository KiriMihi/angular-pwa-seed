import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import UserModel from '../models/UserModel'
import { Http, Response, RequestOptions, Headers } from '@angular/http';

let inputPhoto = document.getElementById('file-input');
@Component({
    moduleId: module.id,
	  templateUrl: './login.component.html'
})


@Injectable()
export class LoginComponent {
  user: UserModel;

    constructor(private http: Http) {
      this.user = new UserModel();
    }

    save() {
    console.log(this.user);  // { first: '', last: '' }
    this.http.post("  ", {moo:"foo",goo:"loo"}).subscribe(res => console.log(res.json()));
  }
}
