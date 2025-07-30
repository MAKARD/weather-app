import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native';

import { useRecentSearches as useRecentSearchesStore } from '../../stores/recent-searches.store';

import { Location } from '@/domain/models/Location.model';

export const useRecentSearches = () => {
  const navigation = useNavigation();

  const recentSearches = useRecentSearchesStore((state) => state.items);

  const onPress = React.useCallback((location: Location) => {
    Keyboard.dismiss();
    navigation.navigate('PreviewWeatherInLocation', { location });
  }, []);

  return {
    recentSearches,
    onPress
  };
};
