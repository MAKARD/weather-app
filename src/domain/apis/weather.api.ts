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
    weather: Array<Weather>;
    main: Conditions;
    wind: Wind;
    name: string;
    visibility: number;
    clouds: Clouds;
  };
}
