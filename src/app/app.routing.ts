import { MyApp } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AUTH_SERVICE } from './shared/services/base-auth.service';
import { OidcAuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { LoginComponent } from "./login/login.component";
import { ImageComponent } from "./image/image.component";
import { DietComponent } from "./diet/diet.component";
import { ProfileComponent } from "./profile/profile.component";
import { SigninComponent } from "./signin/signin.component";



export const routes: Routes = [
    {
        path: 'register',
        component : LoginComponent
    },
     {
        path: '',
        component : SigninComponent
    },
     {
        path: 'profile',
        component : ProfileComponent
    },
      {
        path: 'diet',
        component : DietComponent
    },
     {
        path: 'image',
        component : ImageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
