import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useSavedLocations as useSavedLocationsStore } from '../../stores/saved-locations.store';

import { Location } from '@/domain/models/Location.model';

export const useSavedLocations = () => {
  const navigation = useNavigation();

  const locations = useSavedLocationsStore((state) => state.items);

  const onPress = React.useCallback((location: Location) => {
    navigation.navigate('PreviewWeatherInLocation', { location });
  }, []);

  return {
    locations,
    onPress
  };
};
