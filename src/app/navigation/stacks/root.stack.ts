import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import { PreviewWeatherInLocation } from '../screens/PreviewWeatherInLocation';
import { LocationSearch } from '../screens/LocationSearch';
import { SavedLocations } from '../screens/SavedLocations';

import { Location } from '@/domain/models/Location.model';

type RootStack = {
  LocationSearch: undefined;
  PreviewWeatherInLocation: {
    location: Location;
  };
  SavedLocations: undefined;
}

export const RootStack = createNativeStackNavigator<RootStack>({
  initialRouteName: 'SavedLocations',
  screens: {
    SavedLocations: {
      screen: SavedLocations,
      options: {
        title: 'Weather'
      }
    },
    LocationSearch: {
      screen: LocationSearch,
      options: {
        title: 'Weather',
        headerBackVisible: false,
        animation: 'none'
      }
    },
    PreviewWeatherInLocation: {
      screen: PreviewWeatherInLocation,
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
