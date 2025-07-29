import * as React from 'react';
import { Text, View } from 'react-native';

import { WeatherImage } from '../WeatherImage';

import { styles } from './styles';

import { WeatherType } from '@/domain/models/Weather.model';

interface Props {
  weatherType: WeatherType;
  temperature: number;
  city: string;
}

export const WeatherCard: React.FC<Props> = ({
  weatherType,
  temperature,
  city
}) => {
  return (
    <View style={styles.container}>
      <WeatherImage weatherType={weatherType}>
        <View style={styles.body}>
          <Text style={styles.cityText}>
            {city}
          </Text>
          <Text style={styles.temperatureText}>
            {temperature}°
          </Text>
        </View>
      </WeatherImage>
    </View>
  );
};
