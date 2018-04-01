import { MyApp } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AUTH_SERVICE } from './shared/services/base-auth.service';
import { OidcAuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { LoginComponent } from "./login/login.component";
import { ImageComponent } from "./image/image.component";



export const routes: Routes = [
    {
        path: 'login',
        component : LoginComponent
    },
     {
        path: 'image',
        component : ImageComponent
    },
    {
        path: '',
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'protected',
                loadChildren: './protected/protected.module#ProtectedModule'
            },
            {
                path: 'unauthorized',
                loadChildren: './unauthorized/unauthorized.module#UnauthorizedModule'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
