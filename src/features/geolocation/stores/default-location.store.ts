import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Location } from '@/domain/models/Location.model';
import { Coordinates } from '@/domain/models/Coordinates.model';
import { OpenStreetMapService } from '@/infrastructure/services/HTTPService';
import { ReverseLocation } from '@/domain/apis/geolocation.api';

interface DefaultLocation {
  location?: Location;

  save(coordinates: Coordinates): Promise<void>;
}

const reverseLocation = OpenStreetMapService
  .createRequest<ReverseLocation.ResponseDTO, {}, ReverseLocation.QueryDTO>(ReverseLocation.api);

export const useDefaultLocation = create<DefaultLocation>()(
  persist(
    immer((set) => ({
      save: async (coordinates) => {
        const { address } = await reverseLocation({
          queryParams: {
            format: 'json',
            lat: coordinates.lat,
            lon: coordinates.lon
          }
        }).catch(() => {
          return {
            address: {
              state: '',
              city: '',
              country_code: ''
            }
          };
        });

        set({
          location: {
            ...coordinates,
            name: address.city || address.state,
            state: address.state,
            country: address.country_code.toLocaleUpperCase()
          }
        });
      }
    })),
    {
      name: 'default-location',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
