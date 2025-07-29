import * as React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useSavedLocations } from '@/features/geolocation/stores/saved-locations.store';
import { useWeather } from '@/features/weather/stores/weather.store';

export const usePreviewWeatherInLocation = () => {
  const route = useRoute<ReactNavigation.RouteFor<'PreviewWeatherInLocation'>>();
  const navigation = useNavigation<NativeStackNavigationProp<ReactNavigation.RootParamList>>();

  const coordinates = {
    lat: route.params.location.lat,
    lon: route.params.location.lon
  };

  const saveLocations = useSavedLocations((state) => state.items);
  const saveLocation = useSavedLocations((state) => state.putItem);
  const weather = useWeather((state) => state.weather);

  const isSaved = React.useMemo(() => {
    return !!saveLocations.find((entry) => entry.lat === coordinates.lat && entry.lon === coordinates.lon);
  }, [saveLocations]);

  const addToSavedLocations = React.useCallback(() => {
    if (!weather) {
      return;
    }

    saveLocation({
      ...route.params.location,
      lastKnownWeather: {
        weather: weather.weather[0],
        conditions: weather.main
      }
    });

    navigation.popTo('SavedLocations');
  }, [weather, isSaved]);

  React.useEffect(() => {
    if (!weather || !isSaved) {
      return;
    }

    saveLocation({
      ...route.params.location,
      lastKnownWeather: {
        weather: weather.weather[0],
        conditions: weather.main
      }
    });
  }, [weather, isSaved]);

  return {
    city: route.params.location.name,
    coordinates,
    canSave: !isSaved && !!weather,
    addToSavedLocations,
    goBack: navigation.goBack
  };
};
