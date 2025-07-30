import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { PermissionsService } from '@/infrastructure/services/Permissions';
import { LocationService } from '@/infrastructure/services/LocationService';
import { useDefaultLocation as useDefaultLocationStore } from '@/features/geolocation/stores/default-location.store';
import { useSavedLocations } from '@/features/geolocation/stores/saved-locations.store';

export const useDefaultLocation = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ReactNavigation.RootParamList>>();

  const defaultLocation = useDefaultLocationStore((state) => state.location);
  const saveDefaultLocation = useDefaultLocationStore((state) => state.save);
  const saveLocation = useSavedLocations((state) => state.putItem);

  React.useEffect(() => {
    useDefaultLocationStore.persist.onFinishHydration(async ({ location: savedDefaultLocation }) => {
      if (savedDefaultLocation) {
        return;
      }

      const isAlreadyGranted = await PermissionsService.Location.isGranted('foreground');
      if (isAlreadyGranted) {
        return;
      }

      const isGranted = await PermissionsService.Location.request();
      if (!isGranted) {
        navigation.replace('LocationSearch');

        return;
      }

      const coordinates = await LocationService.getLocation();

      if (!coordinates) {
        navigation.replace('LocationSearch');

        return;
      }

      saveDefaultLocation(coordinates);
    });
  }, []);

  React.useEffect(() => {
    if (!defaultLocation) {
      return;
    }

    saveLocation(defaultLocation);
  }, [defaultLocation]);

  const navigateToSavedLocations = React.useCallback(() => {
    navigation.replace('SavedLocations');
  }, []);

  return {
    navigateToSavedLocations,
    city: defaultLocation?.name,
    coordinates: defaultLocation
      ? {
        lat: defaultLocation.lat,
        lon: defaultLocation.lon
      }
      : undefined
  };
};
