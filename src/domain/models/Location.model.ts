import { Coordinates } from './Coordinates.model';

export interface Location extends Coordinates {
  name: string;
  country: string;
  state?: string;
}
