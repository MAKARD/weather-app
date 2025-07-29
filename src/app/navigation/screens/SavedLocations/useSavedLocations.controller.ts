import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export const useSavedLocations = () => {
  const navigation = useNavigation();

  const navigateToLocationSearch = React.useCallback(() => {
    navigation.navigate('LocationSearch');
  }, []);

  return {
    navigateToLocationSearch
  };
};
