import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { ProfileComponent }   from './profile.component';
import {NgForm} from '@angular/forms';


const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        data: {
            title: 'Login'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {
   
}
