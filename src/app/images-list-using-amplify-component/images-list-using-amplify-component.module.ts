import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImagesListUsingAmplifyComponentPage } from './images-list-using-amplify-component.page';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

const routes: Routes = [
  {
    path: '',
    component: ImagesListUsingAmplifyComponentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmplifyAngularModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AmplifyService
  ],
  declarations: [
    ImagesListUsingAmplifyComponentPage
  ]
})
export class ImagesListUsingAmplifyComponentPageModule { }
