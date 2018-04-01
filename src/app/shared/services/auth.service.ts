import { Platform } from 'ionic-angular';
import { Injectable, EventEmitter, ApplicationRef } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BaseAuthService, Auth, Identity } from './base-auth.service';
import { YoloOidcAuthService } from './yolo-auth.service';
import { Credential } from '@openid/openyolo';

@Injectable()
export class OidcAuthService {




  constructor() {

}

  clearState() {
 
  }

  getUser() {
 
  }

  removeUser() {

  }

  login() {
    
  }


  logout() {
  
  }

  googleRevokeAccess(accessToken) {

  }

}
