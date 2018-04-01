import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'seed-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', './fonts/stylesheet.css']
})
export class ProfileComponent implements OnInit {
weight: number;
used: number;
total: number;

proteinsTotal:number;
proteinsUsed:number;

fatsTotal:number;
fatsUsed:number;

carbohydratesTotal:number;
carbohydratesUsed:number;

  constructor(private http: Http) {

 let headers = new Headers();
     headers.append('Authorization', localStorage.token); 
     this.http.get("https://dietify-api.herokuapp.com/api/user/calorie", {
      headers: headers
    }).subscribe(res => 
      {
        console.log(res.json());
        var result = res.json();
        this.used = result.calorie.used;
        this.total = result.calorie.total;


        this.proteinsTotal = result.dashboard.proteins.used;
        this.proteinsUsed = result.dashboard.proteins.total;

        this.fatsTotal = result.dashboard.fats.used;
        this.fatsUsed = result.dashboard.fats.total;

        this.carbohydratesTotal = result.dashboard.carbohydrates.used;
        this.carbohydratesUsed = result.dashboard.carbohydrates.total;
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
