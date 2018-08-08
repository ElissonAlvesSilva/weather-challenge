import { RouterModule } from '@angular/router';
import { LayoutModule } from '../_layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MomentModule,
    LayoutModule
  ],
  declarations: [
    WeatherSearchComponent,
    WeatherDetailsComponent
  ]
})
export class ApplicationModule { }
