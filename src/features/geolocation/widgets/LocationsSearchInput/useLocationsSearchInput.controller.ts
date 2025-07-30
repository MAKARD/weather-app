import * as React from 'react';

import { useLocationSearch } from '../../stores/location-search.store';

export const useLocationsSearchInput = () => {
  const setSearchTerm = useLocationSearch((state) => state.setSearchTerm);
  const fetchLocations = useLocationSearch((state) => state.fetchLocations);
  const clearLocations = useLocationSearch((state) => state.clearLocations);
  const searchTerm = useLocationSearch((state) => state.searchTerm);
  const isSearching = useLocationSearch((state) => state.isSearching);

  React.useEffect(() => {
    return () => {
      setSearchTerm('');
      clearLocations();
    };
  }, []);

  const onChange = React.useCallback(async (text: string) => {
    setSearchTerm(text);

    if (!text.length) {
      clearLocations();

      return;
    }

    await fetchLocations();
  }, []);

  const onFocus= React.useCallback(() => {
    if (!searchTerm) {
      return;
    }

  }, [searchTerm]);

  const onBlur = React.useCallback(() => {
    if (searchTerm) {
      return;
    }

  }, [searchTerm]);

  return {
    onChange,
    onFocus,
    onBlur,
    isSearching,
    value: searchTerm
  };
};
