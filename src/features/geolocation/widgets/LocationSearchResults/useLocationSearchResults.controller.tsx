import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native';

import { useRecentSearches } from '../../stores/recent-searches.store';
import { useLocationSearch } from '../../stores/location-search.store';

import { Location } from '@/domain/models/Location.model';

export const useLocationSearchResults = () => {
  const navigation = useNavigation();

  const locations = useLocationSearch((state) => state.locations);
  const searchTerm = useLocationSearch((state) => state.searchTerm);
  const isSearching = useLocationSearch((state) => state.isSearching);

  const saveSearch = useRecentSearches((state) => state.putItem);

  const onLocationPress = React.useCallback((location: Location) => {
    saveSearch(location);
    Keyboard.dismiss();
    navigation.navigate('PreviewWeatherInLocation', { location });
  }, []);

  const isNoResults = !locations.length && !!searchTerm && !isSearching;

  return {
    locations,
    isNoResults,
    searchTerm,
    onLocationPress
  };
};
