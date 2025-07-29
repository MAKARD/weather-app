import { Clouds } from '../models/Clouds.model';
import { Conditions } from '../models/Conditions.model';
import { Coordinates } from '../models/Coordinates.model';
import { Weather } from '../models/Weather.model';
import { Wind } from '../models/Wind.model';

import { API } from './api';

export namespace WeatherInLocation {
  export const api: API = {
    method: 'GET',
    path: '/data/2.5/weather'
  };

  export type QueryDTO = Coordinates & {
    units: string;
  };

  export type ResponseDTO = {
    coord: Coordinates;
    name: string;
    weather: Array<Weather>;
    main: Conditions;
    wind: Wind;
    visibility: number;
    clouds: Clouds;
  };
}

export namespace ForecastInLocation {
  export const api: API = {
    method: 'GET',
    path: '/data/2.5/forecast'
  };

  export type QueryDTO = Coordinates & {
    units: string;
  };

  export type ResponseDTO = {
    list: Array<{
      dt_txt: string;
      weather: Array<Weather>;
      main: Conditions;
      wind: Wind;
      visibility: number;
      clouds: Clouds;
    }>;
  }
}
