import { CardComponent } from './card/card.component';
import { EventSearchService } from '../_service/event-search.service';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../_service/weather.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
      HeaderComponent,
      CardComponent
  ],
  exports: [
      HeaderComponent,
      CardComponent
  ],
  providers: [
    WeatherService,
    EventSearchService
  ]
})
export class LayoutModule { }
