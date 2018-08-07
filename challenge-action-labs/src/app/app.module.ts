import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationModule } from './application/application.module';

import { AppComponent } from './app.component';
import { WeatherService } from './_service/weather.service';
import { EventSearchService } from './_service/event-search.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // functionality Module
    ApplicationModule
  ],
  providers: [ EventSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
