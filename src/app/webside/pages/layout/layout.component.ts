import { Component } from '@angular/core';
import { CityBase } from 'src/app/models/city.model';
import { List } from 'src/app/models/weather.model';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  weatherList: List[] = [];
  coordinates: CityBase = {
    lon: 0,
    lat: 0,
    name: '',
  };
  units = false;

  constructor(private weather: ConnectionService) {}

  

  process(coords: CityBase) {
    let { lat, lon, name }: { lat: number; name: string; lon: number } = coords;

    this.coordinates = {
      lat: lat,
      lon: lon,
      name: name,
    };
  }
}
