import { RouterModule } from '@angular/router';
import { LayoutModule } from '../_layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ],
  declarations: [
    WeatherSearchComponent,
    WeatherDetailsComponent
  ]
})
export class ApplicationModule { }
