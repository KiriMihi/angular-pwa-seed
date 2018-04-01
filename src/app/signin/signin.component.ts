import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from "@angular/router";
@Component({
  selector: 'seed-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css', './fonts/stylesheet.css']
})
export class SigninComponent implements OnInit {
email: string;
password: string;
  constructor(private http: Http, private router: Router) {
    
  }

  ngOnInit() {
  }


  login() {
     this.http.post("https://dietify-api.herokuapp.com/api/user/login", {email: this.email, password: this.password}, {
    }).subscribe(res => 
      {
        localStorage.setItem('token', res.json().token);
        console.log(res.json());
        this.router.navigate(['/diet']);
      });
  }
}
