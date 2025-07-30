import * as React from 'react';
import { Image, Text, View } from 'react-native';

import { WeatherImage } from '../WeatherImage';

import { styles } from './styles';

import { WeatherType } from '@/domain/models/Weather.model';
import { icons } from '@/ui/assets/icons';

interface Props {
  weatherType: WeatherType;
  temperature: number;
  city: string;
  iconLeft?: keyof Omit<typeof icons, 'weather'>;
}

export const WeatherCard: React.FC<Props> = ({
  weatherType,
  temperature,
  iconLeft,
  city
}) => {
  return (
    <View style={styles.container}>
      <WeatherImage weatherType={weatherType}>
        <View style={styles.body}>
          {iconLeft && (
            <Image
              style={styles.icon}
              source={icons[iconLeft]}
            />
          )}
          <Text style={styles.cityText} numberOfLines={1}>
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
