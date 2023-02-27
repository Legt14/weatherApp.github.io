import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  private key = `7fc7d283b23828ac1e916222d6374c9b`;
  private urlApiGeo = `https://api.openweathermap.org/geo/1.0/direct`;
  private forecastWeather = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {}

  getCity(city: string) {
    let param = new HttpParams();
    param = param.set('q', city);
    param = param.set('appid', this.key);
    const requestOptions = { params: param };
    return this.http.get(`${this.urlApiGeo}`, requestOptions);
  }

  getWeather(lat: number, lon: number) {
    let param = new HttpParams();
    param = param.set('lat', lat);
    param = param.set('lon', lon);
    param = param.set('appid', this.key);
    param = param.set('units', 'metric')
    param = param.set('mode', 'json')

    const requestOptions = { params: param };

    return this.http.get(`${this.forecastWeather}`, requestOptions);
  }
}
