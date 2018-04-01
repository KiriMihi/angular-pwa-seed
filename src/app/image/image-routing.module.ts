import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { ImageComponent }   from './image.component';
import {NgForm} from '@angular/forms';


const routes: Routes = [
    {
        path: 'image',
        component: ImageComponent,
        data: {
            title: 'Image'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImageRoutingModule {
    name: string;
    save() {
    console.log(this.name);  // { first: '', last: '' }
  }
}
