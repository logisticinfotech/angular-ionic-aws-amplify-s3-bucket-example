import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss'],
})
export class ImagePreviewComponent implements OnInit {

  image;
  singleImage;

  constructor() { }

  ngOnInit() {
    this.getSingleImage(this.image.key);
  }

  // This methos get only single image from AWS
  getSingleImage(imageName) {
    Storage.get(imageName)
      .then((res) => {
        console.log('Single image => ', res);
        this.singleImage = res;
      }).catch((err) => {
        console.log('Single image error => ', err);
      });
  }
}
