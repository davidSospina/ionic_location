import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  constructor(
    public alertController: AlertController, 
    private storage: StorageService
  ) { }

  ngOnInit() {}

  async newAlertLocation(lat, lng) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva ubicación',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre de la ubicación'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (inputs) => {
            console.log('Confirm Ok');
            this.storage.saveLocation(lat, lng, inputs.name);
          }
        }
      ]
    });

    await alert.present();
  }

}
