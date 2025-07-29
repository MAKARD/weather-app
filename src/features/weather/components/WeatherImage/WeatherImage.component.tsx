import * as React from 'react';
import { ImageBackground } from 'react-native';

import { styles } from './styles';

import { WeatherType } from '@/domain/models/Weather.model';
import { images } from '@/ui/assets/images';

interface Props {
  weatherType?: WeatherType;
}

const getImageByWeatherType = (weatherType?: WeatherType) => {
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
};

export const WeatherImage: React.FC<React.PropsWithChildren<Props>> = ({
  weatherType,
  children
}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={getImageByWeatherType(weatherType)}
    >
      {children}
    </ImageBackground>
  );
};
