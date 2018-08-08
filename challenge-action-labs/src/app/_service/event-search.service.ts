import { Injectable, EventEmitter } from '@angular/core';
import { Weather } from '../_models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class EventSearchService {

   public citys: EventEmitter<Array<Weather>> = new EventEmitter();
   public display: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
}
