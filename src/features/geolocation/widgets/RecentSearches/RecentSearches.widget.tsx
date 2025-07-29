import * as React from 'react';
import { Text } from 'react-native';

import { LocationsList } from '../../components/LocationsList';

import { styles } from './styles';
import { useRecentSearches } from './useRecentSearches.controller';

export const RecentSearches: React.FC = () => {
  const {
    recentSearches,
    onPress
  } = useRecentSearches();

  return (
    <>
      {!!recentSearches.length && (
        <Text style={styles.recentSearchesText}>
          Your recent searches
        </Text>
      )}
      <LocationsList
        locations={recentSearches}
        onLocationPress={onPress}
      />
    </>
  );
};
