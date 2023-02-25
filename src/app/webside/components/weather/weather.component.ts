import { Component, Input } from '@angular/core';
import { List, Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  @Input() city = '';
  @Input() country = ''

  imgUrl = 'http://openweathermap.org/img/wn/'

  @Input() units:boolean|null = null;

  @Input() weatherObject: List = {
    dt: 0,
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      sea_level: 0,
      grnd_level: 0,
      humidity: 0,
      temp_kf: 0,
    },
    weather: [],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },
    visibility: 0,
    pop: 0,
    sys: {
      pod: '',
    },
    dt_txt: '',
  };

  weather: Weather = {
    id: 0,
    main: '',
    description: '',
    icon: '',
  };
}
