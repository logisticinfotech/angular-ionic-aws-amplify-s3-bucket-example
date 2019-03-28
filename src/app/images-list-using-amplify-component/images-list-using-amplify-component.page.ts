import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-list-using-amplify-component',
  templateUrl: './images-list-using-amplify-component.page.html',
  styleUrls: ['./images-list-using-amplify-component.page.scss'],
})
export class ImagesListUsingAmplifyComponentPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Image list using amplify component');
  }

  onAlbumImageSelected(event) {
    console.log('onAlbumImageSelected image => ', event);
  }
}
