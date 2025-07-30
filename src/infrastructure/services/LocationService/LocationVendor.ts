import Geolocation from 'react-native-geolocation-service';

import { Coordinates } from '@/domain/models/Coordinates.model';

interface LocationVendor {
  getCurrentPosition(): Promise<Coordinates>;
}

export const LocationVendor: LocationVendor = {
  getCurrentPosition: () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (params) => {
          const { longitude, latitude } = params.coords;

          return resolve({
            lon: longitude,
            lat: latitude
          });
        },
        reject,
        {
          forceRequestLocation: false,
          showLocationDialog: false,
          enableHighAccuracy: true
        }
      );
    });
  }
};
