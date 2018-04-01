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
  searchString: string;
  productname: string;
  constructor(private http: Http) {

  }

  ngOnInit() {

  }

  onSearch() {
    this.searchByBarcode(this.searchString);
  }

  searchByBarcode(barcode) {
    let headers = new Headers();
    headers.append('Authorization', localStorage.token);
    console
    this.http.post("https://dietify-api.herokuapp.com/api/product-instance", {code: barcode}, {
      headers: headers
    }).subscribe(res =>
    {
     this.productname = res.json().product.product_name;
    });
  }

}
