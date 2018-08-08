import { Component, OnInit, AfterContentInit } from '@angular/core';
import { EventSearchService } from '../../_service/event-search.service';
import { Weather } from '../../_models/weather.model';
import { WeatherService } from '../../_service/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Main } from '../../_models/main.model';
import { Sys } from '../../_models/sys.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit, AfterContentInit {

  weather: Weather;
  weathers: Array<Weather>;
  today: false;
  timeToday = new Date();
  constructor(
    private _eventWeather: EventSearchService,
    private _weatherService: WeatherService,
    private _activatedRoute: ActivatedRoute) {
    this.weather = new Weather();
    this.weathers = new Array<Weather>();
    this.weather.main = new Main();
    this.weather.sys = new Sys();
  }

  ngOnInit() {


  }
  ngAfterContentInit() {
    this._activatedRoute.params.subscribe(param => {
      this._weatherService.searchCityById(param.id)
        .then(result => {
          this.weather = result;
        })
        .catch(err => {

        });

      this._weatherService.searchWeatherForecastById(param.id)
        .then(result => {
          this.weathers = result.json().list;

        })
        .catch(err => {

        });
    });
  }
  isTodayText(value) {
    const y = new Date();
    const x = new Date(value);
    const date = x.getDay() + '-' + x.getMonth();
    const today = y.getDay() + '-' + y.getMonth();
    if (date === today) {
      return true;
    } else {
      return false;
    }
  }
  isToday(value) {

    const y = new Date();
    const x = new Date(value);
    const date = x.getDay() + '-' + x.getMonth();
    const today = y.getDay() + '-' + y.getMonth();
    if (date === today) {
      return { 'active': true };
    } else {
      return { 'active': false };
    }
  }

}
