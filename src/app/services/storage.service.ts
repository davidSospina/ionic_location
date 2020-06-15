import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // JSON "set" example
  async saveLocation(lat: number, lng: number, name: string) {
    const id = new Date().getTime();
    await Storage.set({
      key: 'location/${id}',
      value: JSON.stringify({
        id: id,
        lat: lat,
        lng: lng, 
        name: name,
      })
    });
  }
}
