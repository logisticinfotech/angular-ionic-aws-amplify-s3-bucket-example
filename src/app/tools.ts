import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable()
export class Tools {

    loading;
    notification;

    constructor(
        public toastController: ToastController,
        public loadingController: LoadingController
    ) { }

    async openLoader() {
        this.loading = await this.loadingController.create({
            message: 'Please wait...',
            keyboardClose: true,
            showBackdrop: true,
        });
        await this.loading.present();
    }

    async closeLoader() {
        if (this.loading) {
            this.loading.dismiss();
        }
    }

    async openNotification(message) {
        this.notification = await this.toastController.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        this.notification.present();
    }
}
