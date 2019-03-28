import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';
import { PopoverController } from '@ionic/angular';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { Tools } from '../tools';

@Component({
  selector: 'app-single-image-preview',
  templateUrl: './single-image-preview.page.html',
  styleUrls: ['./single-image-preview.page.scss'],
})
export class SingleImagePreviewPage implements OnInit {

  imagesList: any = [];
  selectedImage;

  constructor(
    public popoverController: PopoverController,
    public tools: Tools
  ) { }

  ngOnInit() {
    console.log('single image preview page');
    this.getImagesListFromAmplify();
  }

  // This method get all images from AWS
  getImagesListFromAmplify() {
    this.tools.openLoader();
    // Storage.list(folderPath, { level: 'protected' }); // Protected level: To list current user’s objects
    // To get other users’ objects
    //   Storage.list('photos/', {
    //     level: 'protected',
    //     identityId: 'xxxxxxx' // the identityId of that user
    // })
    Storage.list('')
      .then((result) => {
        console.log('list result => ', result);
        this.imagesList = result;
        this.tools.closeLoader();
      }).catch((err) => {
        console.log('list error => ', err);
        this.tools.closeLoader();
      });
  }

  async onClickViewBtn(image) {
    const imagePreview = await this.popoverController.create({
      component: ImagePreviewComponent,
      componentProps: { image: image },
      showBackdrop: true
    });
    return await imagePreview.present();
  }
}
