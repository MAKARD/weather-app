import * as React from 'react';

import { LocationsList } from '../../components/LocationsList';

import { useLocationSearchResults } from './useLocationSearchResults.controller';

export const LocationSearchResults: React.FC<{}> = () => {
  const {
    locations,
    isNoResults,
    searchTerm,
    onLocationPress
  } = useLocationSearchResults();

  return (
    <LocationsList
      locations={locations}
      isNoResults={isNoResults}
      textToHighlight={searchTerm.trim()}
      onLocationPress={onLocationPress}
    />
  );
};
