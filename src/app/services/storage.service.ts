import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  locations = [];
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

  async keys() {
    const keys = await Storage.keys();
    return this.getLocations(keys.keys);
  }

  async getLocations(keys) {
    for(const key of keys){
      const itemsLS = await Storage.get({ key });
      const item = JSON.parse(itemsLS.value);
      this.locations.push(item);
    }
    return this.locations;
  }

  async getLocation(id){
    const itemLS = await Storage.get({ key: 'location/${id}' });
    const item = JSON.parse(itemLS.value);
    return item;
  }

  async removeLocation(id) {
    await Storage.remove({ key: 'location/${id}' });
    window.location.reload();
  }

}
