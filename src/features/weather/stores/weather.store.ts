import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { HTTPService } from '@/infrastructure/services/HTTPService';
import { WeatherInLocation } from '@/domain/apis/weather.api';
import { Coordinates } from '@/domain/models/Coordinates.model';

const getWeather = HTTPService
  .createRequest<WeatherInLocation.ResponseDTO, {}, WeatherInLocation.QueryDTO>(WeatherInLocation.api);

interface WeatherStore {
  weather?: WeatherInLocation.ResponseDTO;
  clearWeather(): void;
  fetchWeather(coordinates: Coordinates): Promise<void>;
}

export const useWeather = create<WeatherStore>()(immer((set) => ({
  clearWeather: () => {
    set({
      weather: undefined
    });
  },
  fetchWeather: async (coordinates) => {
    const weather = await getWeather({
      queryParams: {
        ...coordinates,
        units: 'metric'
      }
    });

    set({
      weather
    });
  }
})));
