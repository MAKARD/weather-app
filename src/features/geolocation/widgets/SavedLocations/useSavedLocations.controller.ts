import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useSavedLocations as useSavedLocationsStore } from '../../stores/saved-locations.store';
import { useDefaultLocation } from '../../stores/default-location.store';

import { Location } from '@/domain/models/Location.model';

export const useSavedLocations = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ReactNavigation.RootParamList>>();

  const savedLocations = useSavedLocationsStore((state) => state.items);
  const defaultLocation = useDefaultLocation((state) => state.location);

  const onPress = React.useCallback((location: Location) => {
    navigation.replace('WeatherInLocation', { location });
  }, []);

  const locations = React.useMemo(() => {
    return savedLocations.map((location) => {
      const isDefault = defaultLocation?.lon === location.lon && defaultLocation.lat === location.lat;

      return {
        ...location,
        isDefault
      };
    }).sort((x, y) => x.isDefault ? -1 : y.isDefault ? 1 : 0);
  }, [defaultLocation, savedLocations]);

  return {
    locations,
    onPress
  };
};
