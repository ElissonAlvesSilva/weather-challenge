import { WeatherService } from '../../_service/weather.service';
import { Weather } from '../../_models/weather.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventSearchService } from '../../_service/event-search.service';
import { Router } from '@angular/router';
import { Search } from '../../_models/search.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  _search: Weather[];
  sea: Search;
  @Input() type: String;
  formSearch: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _weatherService: WeatherService,
    private _eventWeather: EventSearchService,
    private _router: Router) {
    this.formSearch = this.fb.group({
      search: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.sea = new Search();
    if (this.type === 'details') {
      document.getElementById('header').style.height = '120px';
      document.getElementById('label').style.display = 'none';
      document.getElementById('back').style.display = 'inline-block';
      (<HTMLInputElement> document.getElementById('search_input')).disabled = true;
    } else {
      document.getElementById('back').style.display = 'none';
    }
    this._search = new Array<Weather>();
  }

  search(event) {
    if (event.keyCode === 13) {
      console.log(event.target.value);
      this._weatherService.searchCityByName(this._search)
        .then((result) => {
          if (result.status < 400) {
            this._search = result.json().list;
            this._eventWeather.citys.emit(this._search);
            this._eventWeather.display.emit(true);

          }
        }).catch((err) => {
          console.log(err);
        });
    }
  }
  searchKeyPress(value) {
    if (value !== '') {
      document.getElementById('icon-search').style.display = 'none';
      this._weatherService.searchCityByName(value)
        .then((result) => {
          if (result.status < 400) {
            this._search = result.json().list;
            this._eventWeather.citys.emit(this._search);
            this._eventWeather.display.emit(true);

          }
        }).catch((err) => console.log(err));
    } else {
      this._eventWeather.display.emit(false);
      document.getElementById('icon-search').style.display = 'inline-block';
    }
  }
  back() {
    this._router.navigate(['']);
  }
}
