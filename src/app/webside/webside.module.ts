import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsideRoutingModule } from './webside-routing.module';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './components/search/search.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeathersComponent } from './components/weathers/weathers.component';
import { CityComponent } from './components/city/city.component';

@NgModule({
  declarations: [
    SearchComponent,
    LayoutComponent,
    WeatherComponent,
    WeathersComponent,
    CityComponent,
  ],
  imports: [CommonModule, WebsideRoutingModule, FormsModule],
})
export class WebsideModule {}
