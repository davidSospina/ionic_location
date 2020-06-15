import { Component } from '@angular/core';
import { MapService } from '../services/map.service';
import { AlertComponent } from '../components/alert/alert.component'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private map: MapService,
    public alert: AlertComponent
  ) {}

  ngOnInit(): void{
    this.map.initMap(20.0513254, -75.5160121, 'map');
  }

  getCurrentPosition(){
    this.map.getCurrentPosition().then(position =>{
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      this.map.initMap(lat, lng, 'map');
      this.alert.newAlertLocation(lat, lng);
      //this.storage.saveLocation(lat, lng);
    } );
  }
}
