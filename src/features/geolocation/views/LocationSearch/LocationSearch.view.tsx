import * as React from 'react';

import { SearchInput } from '../../components/SearchInput';
import { SearchResults } from '../../components/SearchResults';

import { useLocationSearch } from './useLocationSearch.controller';

export const LocationSearch: React.FC = () => {
  const {
    setSearchTerm,
    searchTerm,
    locations,
    searchLocations,
    isSearching,
    navigateToWeatherInLocation
  } = useLocationSearch();

  return (
    <>
      <SearchInput
        onChange={setSearchTerm}
        value={searchTerm}
        onSearch={searchLocations}
        isSearching={isSearching}
      />
      <SearchResults
        locations={locations}
        onLocationPress={navigateToWeatherInLocation}
      />
    </>
  );
};
