import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload-using-amplify-component',
  templateUrl: './image-upload-using-amplify-component.page.html',
  styleUrls: ['./image-upload-using-amplify-component.page.scss'],
})
export class ImageUploadUsingAmplifyComponentPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Image upload using amplify Page');
  }

  onImagePicked(event) {
    console.log('onImagePicked ==> ', event);
  }

  onImageLoaded(event) {
    console.log('onImageLoaded ==> ', event);
  }
}
