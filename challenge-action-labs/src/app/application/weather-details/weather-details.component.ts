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

  cityWeather: Weather;
  constructor(
    private _eventWeather: EventSearchService,
    private _weatherService: WeatherService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cityWeather = new Weather();
    this._eventWeather.weatherCity.subscribe(param => {
      this.cityWeather = param;
      console.log(param);
      console.log(this.cityWeather.name);
    });

  }
  ngAfterContentInit() {
    this._activatedRoute.params.subscribe(param => {
      this._weatherService.searchWeatherForecastById(param.id)
        .then(result => {
          console.log(result);
        })
        .catch(err => {

        });
    });
  }

}
