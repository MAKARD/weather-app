import * as React from 'react';
import { Text, View } from 'react-native';

import { SearchInput } from '../../components/SearchInput';
import { SearchResults } from '../../components/SearchResults';

import { useLocationSearch } from './useLocationSearch.controller';
import { styles } from './styles';

export const LocationSearch: React.FC = () => {
  const {
    onSearchTermChange,
    searchTerm,
    locations,
    isSearching,
    resetSearch,
    navigateToWeatherInLocation,
    onInputFocus,
    onInputBlur,
    showRecentSearches,
    recentSearches
  } = useLocationSearch();

  const isNoResults = !locations.length && !!searchTerm && !isSearching;

  return (
    <>
      <SearchInput
        onChange={onSearchTermChange}
        value={searchTerm}
        isSearching={isSearching}
        onCancel={resetSearch}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
      <SearchResults
        locations={locations}
        isNoResults={isNoResults}
        searchTerm={searchTerm.trim()}
        onLocationPress={navigateToWeatherInLocation}
      />
      {showRecentSearches && (
        <View>
          {!!recentSearches.length && (
            <Text style={styles.recentSearchesText}>
              Your recent searches
            </Text>
          )}
          <SearchResults
            locations={recentSearches}
            isNoResults={false}
            searchTerm=""
            onLocationPress={navigateToWeatherInLocation}
          />
        </View>
      )}
    </>
  );
};
