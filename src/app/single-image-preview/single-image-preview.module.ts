import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleImagePreviewPage } from './single-image-preview.page';
import { ImagePreviewComponent } from './image-preview/image-preview.component';

const routes: Routes = [
  {
    path: '',
    component: SingleImagePreviewPage
  },
  {
    path: 'image-preview',
    component: ImagePreviewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SingleImagePreviewPage,
    ImagePreviewComponent
  ]
})
export class SingleImagePreviewPageModule { }
