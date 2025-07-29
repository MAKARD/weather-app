import * as React from 'react';
import { View } from 'react-native';

import { useLocationSearch } from './useLocationSearch.controller';
import { styles } from './styles';

import { LocationsSearchInput } from '@/features/geolocation/widgets/LocationsSearchInput';
import { LocationSearchResults } from '@/features/geolocation/widgets/LocationSearchResults';
import { RecentSearches } from '@/features/geolocation/widgets/RecentSearches';
import { CancelSearch } from '@/features/geolocation/widgets/CancelSearch';

export const LocationSearch: React.FC = () => {
  const { searchTerm, goBack } = useLocationSearch();

  return (
    <>
      <View style={styles.inputContainer}>
        <LocationsSearchInput />
        <CancelSearch onCancelled={goBack} />
      </View>
      <LocationSearchResults />
      {!searchTerm && <RecentSearches />}
    </>
  );
};
