import { Component, OnInit } from '@angular/core';
import { EventSearchService } from '../../_service/event-search.service';
import { Subscription } from 'rxjs';
import { Weather } from '../../_models/weather.model';
import { WeatherDesc } from '../../_models/weather-desc.model';
import { ICONURL } from '../../_consts/const.const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  subscription: Subscription;
  weathers: Array<Weather>;
  has = false;
  icon: String;
  constructor(private _eventSearch: EventSearchService, private _router: Router) { }

  ngOnInit() {
    this.subscription = this._eventSearch.citys.subscribe(param => {
      this.weathers = new Array<Weather>();

      this.weathers = param;
      this.icon = `${ICONURL}`;
    });

    this._eventSearch.display.subscribe(param => {
      this.has = param;
    });
  }
  selectCity(id, index) {
    this._eventSearch.weatherCity.emit(this.weathers[index]);
    this._router.navigate(['/details', id]);
  }

}
