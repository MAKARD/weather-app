import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useLocationSearch as useLocationSearchStore } from '@/features/geolocation/stores/location-search.store';
import { useRecentSearches } from '@/features/geolocation/stores/recent-searches.store';
import { Location } from '@/domain/models/Location.model';

export const useLocationSearch = () => {
  const [isSearching, setSearching] = React.useState(false);

  const navigation = useNavigation();

  const setSearchTerm = useLocationSearchStore((state) => state.setSearchTerm);
  const fetchLocations = useLocationSearchStore((state) => state.fetchLocations);
  const clearLocations = useLocationSearchStore((state) => state.clearLocations);
  const locations = useLocationSearchStore((state) => state.locations);
  const searchTerm = useLocationSearchStore((state) => state.searchTerm);

  const saveSearch = useRecentSearches((state) => state.putItem);
  const recentSearches = useRecentSearches((state) => state.items);

  const navigateToWeatherInLocation = React.useCallback((location: Location) => {
    saveSearch(location);
    navigation.navigate('WeatherInLocation', { location });
  }, []);

  const onSearchTermChange = React.useCallback(async (text: string) => {
    setShowRecentSearches(false);

    setSearchTerm(text);

    if (!text.length) {
      clearLocations();
      setShowRecentSearches(true);

      return;
    }

    setSearching(true);

    await fetchLocations();

    setSearching(false);
  }, []);

  const resetSearch = React.useCallback(() => {
    clearLocations();
    setSearchTerm('');
  }, []);

  const [showRecentSearches, setShowRecentSearches] = React.useState(true);

  const onInputFocus= React.useCallback(() => {
    if (!searchTerm) {
      return;
    }

    setShowRecentSearches(false);
  }, [searchTerm]);

  const onInputBlur = React.useCallback(() => {
    if (searchTerm) {
      return;
    }

    setShowRecentSearches(true);
  }, [searchTerm]);

  return {
    showRecentSearches,
    searchTerm,
    resetSearch,
    onSearchTermChange,
    locations,
    isSearching,
    navigateToWeatherInLocation,
    onInputFocus,
    onInputBlur,
    recentSearches
  };
};
