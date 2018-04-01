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
      "Id": 3,    
      "Name": "Attorney Case"    
    },    
    {    
      "Id": 1035,    
      "Name": "bikesh appeal"    
    },    
    {    
      "Id": 22,    
      "Name": "BikeshAppeal"    
    },    
    {    
      "Id": 20,    
      "Name": "Case Info"    
    },    
    {    
      "Id": 15,    
      "Name": "Case Infoe"    
    },    
    {    
      "Id": 11,    
      "Name": "Case Prep"    
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