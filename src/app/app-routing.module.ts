import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'image-upload-manually',
    loadChildren: './image-upload-manually/image-upload-manually.module#ImageUploadManuallyPageModule'
  },
  {
    path: 'image-upload-using-amplify-component',
    // tslint:disable-next-line:max-line-length
    loadChildren: './image-upload-using-amplify-component/image-upload-using-amplify-component.module#ImageUploadUsingAmplifyComponentPageModule'
  },
  {
    path: 'images-list-manually',
    loadChildren: './images-list-manually/images-list-manually.module#ImagesListManuallyPageModule'
  },
  {
    path: 'images-list-using-amplify-component',
    // tslint:disable-next-line:max-line-length
    loadChildren: './images-list-using-amplify-component/images-list-using-amplify-component.module#ImagesListUsingAmplifyComponentPageModule'
  },
  {
    path: 'single-image-preview',
    loadChildren: './single-image-preview/single-image-preview.module#SingleImagePreviewPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
