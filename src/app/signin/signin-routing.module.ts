import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SigninComponent }   from './signin.component';
import {NgForm} from '@angular/forms';


const routes: Routes = [
    {
        path: 'signin',
        component: SigninComponent,
        data: {
            title: 'Signin'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {
   
}
