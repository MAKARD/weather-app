import { Location } from '../models/Location.model';

import { API } from './api';

export namespace SearchLocation {
  export const api: API = {
    method: 'GET',
    path: '/geo/1.0/direct'
  };

  export type QueryDTO = {
    q: string;
    limit: number;
  };

  export type ResponseDTO = Array<Location>;
}

export namespace ReverseLocation {
  export const api: API = {
    method: 'GET',
    path: '/reverse'
  };

  export type ResponseDTO = {
    address: {
      city?: string;
      state: string;
      country_code: string;
    };
  };

  export type QueryDTO = {
    lat: number;
    lon: number;
    format: string;
  };
}
