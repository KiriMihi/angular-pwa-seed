import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'seed-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
weight: number;
used: number;
total: number;
  constructor(private http: Http) {

 let headers = new Headers();
     headers.append('Authorization', localStorage.token); 
     this.http.get("https://dietify-api.herokuapp.com/api/user/calorie", {
      headers: headers
    }).subscribe(res => 
      {
        console.log(res.json());
        var result = res.json().calorie;
        this.used = result.used;
        this.total = result.total;
      });

       this.http.get("https://dietify-api.herokuapp.com/api/user", {
      headers: headers
    }).subscribe(res => 
      {
        console.log(res.json());
        var result = res.json();
        this.weight = result.weight;
      });
   }

   updateWeight()
   {
     let headers = new Headers();
     headers.append('Authorization', localStorage.token); 
     this.http.put("https://dietify-api.herokuapp.com/api/user/weight", {weight: this.weight}, {
      headers: headers
    }).subscribe(res => 
      {
        localStorage.setItem('token', res.json().token);
        console.log(res.json());
      });
   }

  ngOnInit() {
  }

}
