import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Platform } from 'react-native';

import { PreviewWeatherInLocation } from '../screens/PreviewWeatherInLocation';
import { LocationSearch } from '../screens/LocationSearch';
import { SavedLocations } from '../screens/SavedLocations';
import { DefaultLocation } from '../screens/DefaultLocation';
import { WeatherInLocation } from '../screens/WeatherInLocation';

import { Location } from '@/domain/models/Location.model';

type RootStack = {
  LocationSearch: undefined;
  PreviewWeatherInLocation: {
    location: Location;
  };
  WeatherInLocation: {
    location: Location;
  };
  SavedLocations: undefined;
  DefaultLocation: undefined;
}

export const RootStack = createNativeStackNavigator<RootStack>({
  initialRouteName: 'DefaultLocation',
  screens: {
    DefaultLocation: {
      screen: DefaultLocation,
      options: {
        headerShown: false,
        animation: Platform.select({ android: 'ios_from_right', default: undefined })
      }
    },
    SavedLocations: {
      screen: SavedLocations,
      options: {
        title: 'Weather',
        animation: Platform.select({ android: 'ios_from_right', default: undefined })
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
    WeatherInLocation: {
      screen: WeatherInLocation,
      options: {
        headerShown: false,
        animation: Platform.select({ android: 'ios_from_right', default: undefined })
      }
    },
    PreviewWeatherInLocation: {
      screen: PreviewWeatherInLocation,
      options: {
        presentation: Platform.select({ android: 'formSheet', default: 'modal' }),
        headerShown: false
      }
    }
  }
});

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStack { }

    type RouteFor<T extends keyof RootStack> = RouteProp<RootStack, T>;
  }
}
