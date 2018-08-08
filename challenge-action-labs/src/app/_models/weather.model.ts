import { WeatherDesc } from './weather-desc.model';
import { Sys } from './sys.model';
import { Main } from './main.model';

export class Weather {
    id: Number;
    name: String;
    dt: string;
    dt_text: String;
    weather: Array<WeatherDesc>;
    base: String;
    main: Main;
    sys: Sys;

}
