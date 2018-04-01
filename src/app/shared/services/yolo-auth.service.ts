import { openyolo, OnDemandOpenYoloApi, Credential } from '@openid/openyolo';

import { Injectable, Inject } from '@angular/core';

import { BaseAuthService, Auth, Identity, AUTH_SERVICE } from './base-auth.service';
import { BehaviorSubject } from 'rxjs';
import { OidcAuthService } from './auth.service';
import { ToastController } from 'ionic-angular';




export abstract class YoloBaseAuthService<T extends BaseAuthService<any>> extends BaseAuthService<Credential> {

  // protected get yolo(): Promise<OnDemandOpenYoloApi> {
  //   const ret = (<OnDemandOpenYoloApi>(<any>window).googleyolo);
  //   return ret;


  //   return (<any>window).onGoogleYoloLoad;
  // }



  protected yolo: OnDemandOpenYoloApi;

 

  protected abstract get wrappedAuthService(): T;



  constructor(public toastCtrl: ToastController) {
    super();

  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = <HTMLScriptElement>document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      scriptElement.onerror = reject;
      document.body.appendChild(scriptElement);
    });
  }

  login(force = true) {

  }



  logout() {
  }
}


@Injectable()
export class YoloOidcAuthService {
  private _wrappedAuthService: OidcAuthService;
  protected get wrappedAuthService(): OidcAuthService {
    return this._wrappedAuthService;
  }

  constructor(private authService: OidcAuthService, public toastCtrl: ToastController) {
    const _authService = (authService as OidcAuthService);
    this._wrappedAuthService = _authService;
  }
}