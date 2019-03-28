import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import Amplify from 'aws-amplify';
import amplify from '../aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Image Upload Manually',
      url: '/image-upload-manually',
      icon: 'cloud-upload'
    },
    {
      title: 'Image Upload Using Amplify Component',
      url: '/image-upload-using-amplify-component',
      icon: 'cloud-upload'
    },
    {
      title: 'Image List Manually',
      url: '/images-list-manually',
      icon: 'list'
    },
    {
      title: 'Image List Using Amplify Component',
      url: '/images-list-using-amplify-component',
      icon: 'list'
    },
    {
      title: 'Single Image Preview',
      url: '/single-image-preview',
      icon: 'image'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      Amplify.configure(amplify);
    });
  }
}
