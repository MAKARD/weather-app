import * as React from 'react';
// import { useNavigation } from '@react-navigation/native';

import { useLocationSearch } from '../../stores/location-search.store';

export interface UseLocationsSearchInputParams {
  onSearch?: () => void;
}

export const useLocationsSearchInput = ({
  onSearch
}: UseLocationsSearchInputParams) => {
  // const navigation = useNavigation();

  const setSearchTerm = useLocationSearch((state) => state.setSearchTerm);
  const fetchLocations = useLocationSearch((state) => state.fetchLocations);
  const clearLocations = useLocationSearch((state) => state.clearLocations);
  // const locations = useLocationSearch((state) => state.locations);
  const searchTerm = useLocationSearch((state) => state.searchTerm);
  const isSearching = useLocationSearch((state) => state.isSearching);

  // const saveSearch = useRecentSearches((state) => state.putItem);
  // const recentSearches = useRecentSearches((state) => state.items);

  // const navigateToWeatherInLocation = React.useCallback((location: Location) => {
  //   saveSearch(location);
  //   navigation.navigate('WeatherInLocation', { location });
  // }, []);

  const onChange = React.useCallback(async (text: string) => {
    // setShowRecentSearches(false);

    setSearchTerm(text);

    if (!text.length) {
      clearLocations();
      // setShowRecentSearches(true);

      return;
    }

    await fetchLocations();
  }, []);

  // const onCancel = React.useCallback(() => {
  //   clearLocations();
  //   setSearchTerm('');

  //   queueMicrotask(() => {
  //     Keyboard.dismiss();
  //   });

  //   navigation.goBack();
  // }, []);

  // const [showRecentSearches, setShowRecentSearches] = React.useState(true);

  const onFocus= React.useCallback(() => {
    if (!searchTerm) {
      return;
    }

    // setShowRecentSearches(false);
  }, [searchTerm]);

  const onBlur = React.useCallback(() => {
    if (searchTerm) {
      return;
    }

    // setShowRecentSearches(true);
  }, [searchTerm]);

  return {
    onChange,
    onFocus,
    onBlur,
    isSearching,
    value: searchTerm
  };
};
