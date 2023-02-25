import { Component, Input} from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent {
  @Input() lat: number = 0;
  @Input() lon: number = 0;



  constructor(private connection: ConnectionService) {}

  onWeather(lat: number, lon: number) {
    return this.connection
      .getWeather(lat, lon)
      .pipe(
        map((data: any) => {
          console.log(data)
        })
      )
      .subscribe();
  }
}

/*
  { "coord": { "lon": 0, "lat": 0 }, "weather": [ { "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" } ], "base": "stations", "main": { "temp": 27.88, "feels_like": 31.66, "temp_min": 27.88, "temp_max": 27.88, "pressure": 1011, "humidity": 79, "sea_level": 1011, "grnd_level": 1011 }, "visibility": 10000, "wind": { "speed": 3.7, "deg": 175, "gust": 3.82 }, "clouds": { "all": 100 }, "dt": 1677014168, "sys": { "sunrise": 1676959827, "sunset": 1677003433 }, "timezone": 0, "id": 6295630, "name": "Globe", "cod": 200 }
*/
