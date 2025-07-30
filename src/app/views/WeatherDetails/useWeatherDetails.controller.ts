import * as React from 'react';

import { Coordinates } from '@/domain/models/Coordinates.model';
import { useWeather } from '@/features/weather/stores/weather.store';
import { useSavedLocations } from '@/features/geolocation/stores/saved-locations.store';

export interface UseWeatherDetailsParams {
  coordinates?: Coordinates;
}

export const useWeatherDetails = ({
  coordinates
}: UseWeatherDetailsParams) => {
  const [isLoading, setLoading] = React.useState(true);

  const fetchWeather = useWeather((state) => state.fetchWeather);
  const fetchForecast = useWeather((state) => state.fetchForecast);
  const weather = useWeather((state) => state.weather);
  const forecast = useWeather((state) => state.forecast);
  const clearWeather = useWeather((state) => state.clearWeather);
  const savedLocations = useSavedLocations((state) => state.items);
  const updateSavedLocation = useSavedLocations((state) => state.putItem);

  const savedLocation = React.useMemo(() => {
    return savedLocations.find((entry) => entry.lat === coordinates?.lat && entry.lon === coordinates.lon);
  }, [savedLocations]);

  React.useEffect(() => {
    if (!weather || !savedLocation) {
      return;
    }

    updateSavedLocation({
      ...savedLocation,
      lastKnownWeather: {
        weather: weather.weather[0],
        conditions: weather.main
      }
    });
  }, [weather, !!savedLocation]);

  React.useEffect(() => {
    if (!coordinates) {
      return;
    }

    Promise.all([
      fetchWeather({
        lat: coordinates.lat,
        lon: coordinates.lon
      }),
      fetchForecast({
        lat: coordinates.lat,
        lon: coordinates.lon
      })
    ]).then(() => {
      setLoading(false);
    });

    return () => {
      clearWeather();
    };
  }, [coordinates?.lat, coordinates?.lon]);

  return {
    weatherType: weather?.weather[0].main,
    conditions: {
      temperature: Math.round(weather?.main.temp || 0),
      description: weather?.weather[0].main,
      maxTemperature: Math.round(weather?.main.temp_max || 0),
      minTemperature: Math.round(weather?.main.temp_min || 0),
      feelsLike: Math.round(weather?.main.feels_like || 0),
      humidity: Math.round(weather?.main.humidity || 0)
    },
    isLoading,
    forecast: React.useMemo(() => (
      forecast
        .map((entry) => ({
          weekday: entry.weekday,
          minTemperature: Math.round(entry.main.temp_min),
          maxTemperature: Math.round(entry.main.temp_max),
          weatherType: entry.weather[0].main
        }))
        .slice(0, 5)
    ), [isLoading]),
    wind: {
      speed: Math.round(weather?.wind.speed || 0),
      gusts: Math.round(weather?.wind.gust || 0),
      direction: Math.round(weather?.wind.deg || 0)
    }
  };
};
