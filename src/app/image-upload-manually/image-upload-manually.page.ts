import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-image-upload-manually',
  templateUrl: './image-upload-manually.page.html',
  styleUrls: ['./image-upload-manually.page.scss'],
})
export class ImageUploadManuallyPage implements OnInit {

  imagePath;

  isOpenLoader = false;
  current = 0;
  max = 100;

  constructor(
    public ngZone: NgZone
  ) { }

  ngOnInit() {
    console.log('Image upload manuallay Page');
  }

  openFileForUpload() {
    document.getElementById('selecetImage').click();
  }

  webSelectImage(element) {
    // console.log(' select target ==> ', element);
    if (element) {
      const file = element.target.files[0];
      this.saveImageInAmplify(element.target.files[0].name, file);
    }
  }

  // This method puts image in AWS server
  saveImageInAmplify(filename, file) {
    this.isOpenLoader = true;
    // Customize path give here
    const customPrefix = {
      public: 'myPublicPrefix/',
      protected: 'myProtectedPrefix/',
      private: 'myPrivatePrefix/'
    };
    const self = this;
    Storage.put(filename, file, {
      progressCallback(progress) {
        const value = Math.round(progress.loaded / progress.total * 100);
        self.current = value;
        console.log('Uploaded : ', value, self.current);
      },
      contentType: 'image/png',
      // customPrefix: customPrefix  // For customize path
    }).then((result: any) => {
      console.log('Success result =>', result);
      this.isOpenLoader = false;
      this.imagePath = 'https://s3bucket-uploadtest.s3.amazonaws.com/public/' + result.key;
    }).catch((err) => {
      console.log('error =>', err);
      this.isOpenLoader = false;
    });
  }
}
