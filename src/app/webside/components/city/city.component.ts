import { Component, Input } from '@angular/core';
import { City, WeatherModel } from 'src/app/models/weather.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent {
  @Input() city: City = {
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
}
