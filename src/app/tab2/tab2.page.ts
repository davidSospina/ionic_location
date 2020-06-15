import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  locations = [];
  constructor(
    private storage: StorageService
  ) {}

  ngOnInit(): void{
    this.storage.keys().then(locations => {
      this.locations = locations;
    });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      window.location.reload();
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }

  deleteLocation(id){
    this.storage.removeLocation(id);
  }

}
