import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { ForecastInLocation, WeatherInLocation } from '@/domain/apis/weather.api';
import { Coordinates } from '@/domain/models/Coordinates.model';
import { OpenWeatherService } from '@/infrastructure/services/HTTPService';

const getWeather = OpenWeatherService
  .createRequest<WeatherInLocation.ResponseDTO, {}, WeatherInLocation.QueryDTO>(WeatherInLocation.api);

const getForecast = OpenWeatherService
  .createRequest<ForecastInLocation.ResponseDTO, {}, ForecastInLocation.QueryDTO>(ForecastInLocation.api);

interface ForecastItem extends Omit<WeatherInLocation.ResponseDTO, 'coord' | 'name'> {
  weekday: string;
}

interface WeatherStore {
  weather?: WeatherInLocation.ResponseDTO;
  forecast: Array<ForecastItem>;
  clearWeather(): void;
  fetchWeather(coordinates: Coordinates): Promise<void>;
  fetchForecast(coordinates: Coordinates): Promise<void>;
}

export const useWeather = create<WeatherStore>()(immer((set) => ({
  forecast: [],
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
  },
  fetchForecast: async (coordinates) => {
    const { list } = await getForecast({
      queryParams: {
        ...coordinates,
        units: 'metric'
      }
    });

    const dailyData = list.reduce((previousValue, entry) => {
      const date = entry.dt_txt.slice(0, 10);

      if (!previousValue[date]) {
        previousValue[date] = [entry];
      } else {
        previousValue[date].push(entry);
      }

      return previousValue;
    }, {} as Record<string, Array<ForecastInLocation.ResponseDTO['list'][0]>>);

    const forecast = Object.entries(dailyData).map(([date, entries]) => {
      const noonEntry = entries.find((entry) => entry.dt_txt.includes('12:00:00')) || entries[0];

      const weekday = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });

      return {
        weekday,
        weather: noonEntry.weather,
        main: {
          ...noonEntry.main,
          temp_max: Math.max(...entries.map(({ main }) => main.temp_max)),
          temp_min: Math.min(...entries.map(({ main }) => main.temp_min))
        },
        wind: noonEntry.wind,
        visibility: noonEntry.visibility,
        clouds: noonEntry.clouds
      } satisfies ForecastItem;
    });

    set({
      forecast
    });
  }
})));
