import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';
import { Tools } from '../tools';

@Component({
  selector: 'app-images-list-manually',
  templateUrl: './images-list-manually.page.html',
  styleUrls: ['./images-list-manually.page.scss'],
})
export class ImagesListManuallyPage implements OnInit {

  imagesList: any = [];
  selectedImage;

  constructor(
    public tools: Tools
  ) { }

  ngOnInit() {
    console.log('Image list manually');
    this.getImagesListFromAmplify(true);
  }

  // This method get all images from AWS
  getImagesListFromAmplify(isShowLoader) {
    // Storage.list(folderPath, { level: 'protected' }); // Protected level: To list current user’s objects
    // To get other users’ objects
    //   Storage.list('photos/', {
    //     level: 'protected',
    //     identityId: 'xxxxxxx' // the identityId of that user
    // })
    if (isShowLoader) {
      this.tools.openLoader();
    }
    Storage.list('')
      .then((result) => {
        console.log('list result => ', result);
        for (let i = 0; i < result.length; i++) {
          result[i].isSelected = false;
        }
        this.imagesList = result;
        this.tools.closeLoader();
      }).catch((err) => {
        console.log('list error => ', err);
        this.tools.closeLoader();
      });
  }

  onClickSelectImage(image) {
    for (let i = 0; i < this.imagesList.length; i++) {
      this.imagesList[i].isSelected = false;
    }
    image.isSelected = true;
    this.selectedImage = image;
  }

  onClickRemoveBtn() {
    if (!this.selectedImage) {
      this.tools.openNotification('please select image');
      return;
    }
    this.tools.openLoader();
    Storage.remove(this.selectedImage.key)
      .then((result) => {
        console.log('removeImageFromAWS success =>', result);
        this.getImagesListFromAmplify(false);
      })
      .catch((err) => {
        console.log('removeImageFromAWS error =>', err);
      });
  }

}
