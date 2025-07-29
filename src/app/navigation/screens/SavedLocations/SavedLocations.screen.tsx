import * as React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { useSavedLocations } from './useSavedLocations.controller';

import { SavedLocations as SavedLocationsList } from '@/features/geolocation/widgets/SavedLocations';
import { WeatherCard } from '@/features/weather/components/WeatherCard';
import { SearchInput } from '@/features/geolocation/components/SearchInput';

export const SavedLocations: React.FC = () => {
  const { navigateToLocationSearch } = useSavedLocations();

  return (
    <View style={styles.container}>
      <SearchInput
        readOnly
        onPress={navigateToLocationSearch}
      />
      <View style={styles.margin} />
      <SavedLocationsList
        renderItem={(entry) => (
          <WeatherCard
            weatherType={entry.weatherType}
            city={entry.city}
            temperature={entry.temperature}
          />
        )}
      />
    </View>
  );
};
