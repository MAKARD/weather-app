import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LocationSearch } from '@/features/geolocation/views/LocationSearch';
import { Location } from '@/domain/models/Location.model';

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
      screen: () => null,
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
  }
}
