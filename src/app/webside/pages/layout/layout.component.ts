import { Component } from '@angular/core';
import { CityBase } from 'src/app/models/city.model';
import { List, WeatherModel, City } from 'src/app/models/weather.model';
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
  city: City = {
    id: 0,
    name: '',
    coord: {
      lat: 0,
      lon: 0,
    },
    country: '',
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0,
  };

  constructor() {}

  process(coords: CityBase) {
    let { lat, lon, name }: { lat: number; name: string; lon: number } = coords;

    this.coordinates = {
      lat: lat,
      lon: lon,
      name: name,
    };
  }
  getCItyName(data: City) {
    this.city = {
      id: data.id,
      name: data.name,
      coord: {
        lat: data.coord.lat,
        lon: data.coord.lon,
      },
      country: data.country,
      population: data.population,
      timezone: data.timezone,
      sunrise: data.sunrise,
      sunset: data.sunset,
    };
  }
}
