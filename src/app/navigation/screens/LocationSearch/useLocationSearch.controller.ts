import { useNavigation } from '@react-navigation/native';

import { useLocationSearch as useLocationSearchStore } from '@/features/geolocation/stores/location-search.store';

export const useLocationSearch = () => {
  const navigation = useNavigation();

  const searchTerm = useLocationSearchStore((state) => state.searchTerm);

  return {
    searchTerm,
    goBack: navigation.goBack
  };
};
