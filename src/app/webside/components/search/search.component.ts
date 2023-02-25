import { Component, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { ConnectionService } from 'src/app/services/connection.service';
import { CityBase } from 'src/app/models/city.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent{
  coordinates: CityBase = {
    lon: 0,
    lat: 0,
    name: '',
  };
  value = '';
  units = true;
  @Output() coord = new EventEmitter()

  constructor(private connect: ConnectionService) {}

  onInfo() {
    console.log(this.value);
    return this.connect
      .getCity(this.value)
      .pipe(
        map((data: any) => {
          data.map((d:any)=>{
            this.coordinates = {
              lat: d.lat,
              lon: d.lon,
              name: d.name
            }
            this.coord.emit(this.coordinates)
          })
        })
      )
      .subscribe();
  }
  
  temp(){
    this.units = !this.units
  }



}
