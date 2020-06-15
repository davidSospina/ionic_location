import { Injectable } from '@angular/core';

declare let google;

import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  async initMap(lat: number, lng: number, id: string){
    const map = await new google.maps.Map(document.getElementById(id), {
      center: { lat: lat, lng: lng },
      zoom: 15
    });

    // Marcador para la ubcación en el mapa.
    const marker = new google.maps.Marker({
      // Posicion donde estará el marcador
      position: { lat, lng},
      // En donde se queire ubicar, en este caso en map, corresponde al id que se definió
      map: map
    })
  }

  async getCurrentPosition() {
    return await Geolocation.getCurrentPosition();
    //console.log('Current', coordinates);
  }
}
