import * as React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

import { styles } from './styles';
import { useSavedLocations } from './useSavedLocations.controller';

import { WeatherType } from '@/domain/models/Weather.model';

interface Props {
  renderItem: (params: {
    city: string;
    temperature: number;
    weatherType: WeatherType;
    isDefault: boolean;
  }) => React.ReactNode;
}

export const SavedLocations: React.FC<Props> = ({
  renderItem
}) => {
  const {
    locations,
    onPress
  } = useSavedLocations();

  return (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {locations.map((location) => (
        <TouchableOpacity
          key={uuid.v4()}
          onPress={() => onPress(location)}
          style={styles.item}
        >
          {renderItem({
            city: location.name,
            temperature: Math.round(location.lastKnownWeather?.conditions.temp || 0),
            weatherType: location.lastKnownWeather?.weather.main || 'Clear',
            isDefault: location.isDefault
          })}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
