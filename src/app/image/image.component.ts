import { Component, OnInit } from '@angular/core';
import UserModel from '../models/UserModel'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from "@angular/router";

@Component({
  selector: 'seed-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private http: Http) { 
    let headers = new Headers();
     headers.append('Authorization', localStorage.token); 
     this.http.get("https://dietify-api.herokuapp.com/api/user", {
      headers: headers
    }).subscribe(res => 
      {
        console.log(res.json());
      });;
  }

  ngOnInit() {
  }

}
