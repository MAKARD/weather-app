import * as React from 'react';

import { WeatherType } from '@/domain/models/Weather.model';
import { images } from '@/ui/assets/images';

export const useBackgroundImage = (weatherType?: WeatherType) => {
  return React.useMemo(() => {
    switch (weatherType) {
      case 'Clear':
        return images.weather.clear;
      case 'Clouds':
        return images.weather.clouds;
      case 'Fog':
      case 'Mist':
      case 'Haze':
      case 'Smoke':
        return images.weather.fog;
      case 'Rain':
      case 'Drizzle':
        return images.weather.rain;
      case 'Snow':
        return images.weather.snow;
      case 'Thunderstorm':
      case 'Squall':
      case 'Tornado':
        return images.weather.storm;
      case 'Dust':
      case 'Sand':
      case 'Ash':
        return images.weather.fog;
      default:
        return images.weather.unknown;
    }
  }, [weatherType]);
};
