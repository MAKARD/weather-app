import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import { LocationSearch } from '@/features/geolocation/views/LocationSearch';
import { Location } from '@/domain/models/Location.model';
import { WeatherInLocation } from '@/features/weather/views/WeatherInLocation';

type RootStack = {
  LocationSearch: undefined;
  WeatherInLocation: {
    location: Location;
  };
}

export const RootStack = createNativeStackNavigator<RootStack>({
  initialRouteName: 'LocationSearch',
  screens: {
    LocationSearch: {
      screen: LocationSearch,
      options: {
        title: 'Weather'
      }
    },
    WeatherInLocation: {
      screen: WeatherInLocation,
      options: () => ({
        presentation: 'modal',
        headerShown: false
      })
    }
  }
});

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStack { }

    type RouteFor<T extends keyof RootStack> = RouteProp<RootStack, T>;
  }
}
