import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImageUploadUsingAmplifyComponentPage } from './image-upload-using-amplify-component.page';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

const routes: Routes = [
  {
    path: '',
    component: ImageUploadUsingAmplifyComponentPage
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
    ImageUploadUsingAmplifyComponentPage
  ]
})
export class ImageUploadUsingAmplifyComponentPageModule { }
