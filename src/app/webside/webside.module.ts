import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsideRoutingModule } from './webside-routing.module';
import { FormsModule } from '@angular/forms';

import { CityComponent } from './components/city/city.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeathersComponent } from './components/weathers/weathers.component';

@NgModule({
  declarations: [
    CityComponent,
    SearchComponent,
    HomeComponent,
    LayoutComponent,
    WeatherComponent,
    WeathersComponent
  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    FormsModule
  ]
})
export class WebsideModule { }
