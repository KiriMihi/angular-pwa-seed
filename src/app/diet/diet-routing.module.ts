import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { DietComponent }   from './diet.component';
import {NgForm} from '@angular/forms';


const routes: Routes = [
    {
        path: 'diet',
        component: DietComponent,
        data: {
            title: 'Diet'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {
   
}
