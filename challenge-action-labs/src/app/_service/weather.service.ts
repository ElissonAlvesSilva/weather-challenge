import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { API, APIID } from '../_consts/const.const';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _htpp: Http) { }

  searchCityByName(value) {
    return this._htpp.get(`${API}find?q=${value}&appid=${APIID}&units=metric`, this.setHeaders())
      .toPromise()
      .then(response => {
        return response;
      });
  }

  searchCityById(_id) {
    return this._htpp.get(`${API}weather?id=${_id}&appid=${APIID}&units=metric`, this.setHeaders())
      .toPromise()
      .then(response => {
        return response;
      });
  }

  searchWeatherForecastById(_id) {
    return this._htpp.get(`${API}forecast?id=${_id}&appid=${APIID}&units=metric`, this.setHeaders())
      .toPromise()
      .then(response => {
        return response;
      });
  }
  searchWeatherForecastByName(_id) {
    return this._htpp.get(`${API}forecast?q=${_id}&appid=${APIID}&units=metric`, this.setHeaders())
      .toPromise()
      .then(response => {
        return response;
      });
  }

  private setHeaders() {
    const headers = new Headers();
    return new RequestOptions({ headers: headers });
  }
}
