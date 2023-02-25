import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { WeatherModel } from 'src/app/models/weather.model';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css'],
})
export class WeathersComponent implements OnChanges{
  @Input() lat: number = 0;
  @Input() lon: number = 0;
  units: boolean | null = null;


  weatherTimeLaps: WeatherModel = {
    cod: '',
    message: 0,
    cnt: 0,
    list: [],
    city: {
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
    },
  };

  constructor(private connection: ConnectionService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.temp(changes['lat'].currentValue, changes['lon'].currentValue)
  }

  temp(lat: number, lon: number) {
    this.onWeather(lat, lon);
  }

  onWeather(lat: number, lon: number) {
    return this.connection
      .getWeather(lat, lon)
      .pipe(
        map((data: any) => {
          this.weatherTimeLaps = data;
          console.log('here', this.weatherTimeLaps);
        })
      )
      .subscribe();
  }
}
