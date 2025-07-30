import * as React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Alert } from 'react-native';

import { useDefaultLocation } from '@/features/geolocation/stores/default-location.store';

export const useWeatherInLocation = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ReactNavigation.RootParamList>>();

  const route = useRoute<ReactNavigation.RouteFor<'WeatherInLocation'>>();

  const defaultLocation = useDefaultLocation((state) => state.location);
  const setDefault = useDefaultLocation((state) => state.save);

  const coordinates = {
    lat: route.params.location.lat,
    lon: route.params.location.lon
  };

  const isDefault = defaultLocation?.lat === coordinates.lat
    && defaultLocation?.lon === coordinates.lon;

  const navigateToSavedLocations = React.useCallback(() => {
    navigation.replace('SavedLocations');
  }, []);

  const makeDefault = React.useCallback(() => {
    Alert.alert(
      `Do you want to make ${route.params.location.name} your default location?`,
      `This makes ${route.params.location.name} to be shown upon application launch`,
      [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            setDefault(route.params.location);
          }
        }
      ]
    );
  }, [route.params.location.name]);

  return {
    isDefault,
    makeDefault,
    navigateToSavedLocations,
    city: route.params.location.name,
    coordinates
  };
};
