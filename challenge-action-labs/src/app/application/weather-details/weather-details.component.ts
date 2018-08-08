import { WeatherDesc } from './../../_models/weather-desc.model';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { EventSearchService } from '../../_service/event-search.service';
import { Weather } from '../../_models/weather.model';
import { WeatherService } from '../../_service/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit, AfterContentInit {

  weather: Weather;
  weathers: Array<Weather>;
  constructor(
    private _eventWeather: EventSearchService,
    private _weatherService: WeatherService,
    private _activatedRoute: ActivatedRoute) {
    this.weather = new Weather();
    this.weathers = new Array<Weather>();
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
    });

    this._activatedRoute.params.subscribe(param => {
      this._weatherService.searchWeatherForecastById(param.id)
        .then(result => {
          this.weathers = result.json().list;
        })
        .catch(err => {

        });
    });
  }

}
