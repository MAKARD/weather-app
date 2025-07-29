import * as React from 'react';
import { Image, Text, View } from 'react-native';
import uuid from 'react-native-uuid';

import { styles } from './styles';
import { TemperatureRange } from './components/TemperatureRange';

import { WeatherType } from '@/domain/models/Weather.model';
import { icons } from '@/ui/assets/icons';

interface Props {
  list: Array<{
    weekday: string;
    maxTemperature: number;
    minTemperature: number;
    weatherType: WeatherType;
  }>;
}

const getIconForWeather = (type: WeatherType) => {
  switch(type) {
    case 'Drizzle':
    case 'Rain':
      return icons.weather.rain;

    case 'Snow':
      return icons.weather.snow;

    case 'Clear':
      return icons.weather.clear;

    case 'Fog':
    case 'Mist':
    case 'Haze':
    case 'Clouds':
      return icons.weather.clouds;

    case 'Squall':
    case 'Tornado':
    case 'Thunderstorm':
      return icons.weather.storm;

    default: {
      return icons.weather.clear;
    }
  }
};

export const FiveDaysForecast: React.FC<Props> = ({
  list
}) => {
  const minTemperatureThroughoutForecast = React.useMemo(
    () => Math.min(...list.map(({ minTemperature }) => minTemperature)),
    []
  );

  const maxTemperatureThroughoutForecast = React.useMemo(
    () => Math.max(...list.map(({ maxTemperature }) => maxTemperature)),
    []
  );

  return (
    <View style={styles.container}>
      {list.map((entry) => (
        <View
          style={styles.forecastItemContainer}
          key={uuid.v4()}
        >
          <Text style={styles.weekdayText}>
            {entry.weekday.slice(0, 3)}
          </Text>
          <Image
            style={styles.weatherIcon}
            source={getIconForWeather(entry.weatherType)}
          />
          <TemperatureRange
            temperature={{
              min: entry.minTemperature,
              max: entry.maxTemperature
            }}
            range={{
              min: minTemperatureThroughoutForecast,
              max: maxTemperatureThroughoutForecast
            }}
          />
        </View>
      ))}
    </View>
  );
};
