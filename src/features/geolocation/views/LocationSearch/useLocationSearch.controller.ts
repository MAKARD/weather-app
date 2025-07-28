import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useLocationSearch as useLocationSearchStore } from '@/features/geolocation/stores/location-search.store';
import { Location } from '@/domain/models/Location.model';

export const useLocationSearch = () => {
  const [isSearching, setSearching] = React.useState(false);

  const navigation = useNavigation();

  const setSearchTerm = useLocationSearchStore((state) => state.setSearchTerm);
  const fetchLocations = useLocationSearchStore((state) => state.fetchLocations);
  const locations = useLocationSearchStore((state) => state.locations);
  const searchTerm = useLocationSearchStore((state) => state.searchTerm);

  const searchLocations = React.useCallback(async () => {
    setSearching(true);

    await fetchLocations();

    setSearching(false);
  }, []);

  const navigateToWeatherInLocation = React.useCallback((location: Location) => {
    navigation.navigate('WeatherInLocation', { location });
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    locations,
    searchLocations,
    isSearching,
    navigateToWeatherInLocation
  };
};
