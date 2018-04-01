import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from "@angular/router";

@Component({
  selector: 'seed-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {
  dietList: any;
  dietId:Number; 
  constructor(private http: Http) {
    
    this.dietList=[    
    {    
      "Id": 1,    
      "Name": "Proper nutrition"    
    },    
    {    
      "Id": 2,    
      "Name": "Diabetes of the 1st degree"    
    },    
    {    
      "Id": 3,    
      "Name": "Diabetes of 2nd degree"    
    },    
    {    
      "Id": 4,    
      "Name": "For losing weight"    
    },    
    {    
      "Id": 5,    
      "Name": "For weight gain"    
    }
  ];
  }

    ngOnInit() {
  }


selectDiet()
{
  let headers = new Headers();
  headers.append('Authorization', localStorage.token); 
  this.http.put("https://dietify-api.herokuapp.com/api/user/diet/"+ this.dietId, {
        headers: headers
      }).subscribe(res => 
        {
          console.log(res.json());
        });;
    }
  }