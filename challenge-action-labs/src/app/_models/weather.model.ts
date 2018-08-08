import { WeatherDesc } from './weather-desc.model';

export class Weather {
    id: Number;
    name: String;
    weather: Array<WeatherDesc>;
    base: String;
    main: {
        temp: String;
        pressure: String;
        humidity: String;
        temp_min: String;
        temp_max: String;
    };
    sys: {
        country: String;
        sunrise: Date;
        sunset: Date;
    };

}
