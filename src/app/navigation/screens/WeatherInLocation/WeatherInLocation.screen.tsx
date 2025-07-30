import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { useWeatherInLocation } from './useWeatherInLocation.controller';
import { styles } from './styles';

import { icons } from '@/ui/assets/icons';
import { WeatherDetails } from '@/app/views/WeatherDetails';

export const WeatherInLocation: React.FC = () => {
  const {
    navigateToSavedLocations,
    coordinates,
    city,
    makeDefault,
    isDefault
  } = useWeatherInLocation();

  return (
    <WeatherDetails
      city={city}
      coordinates={coordinates}
      Footer={(
        <View style={styles.bottomContainer}>
          <BlurView
            style={styles.blurView}
            blurType="light"
            blurAmount={5}
          />
          <View
            style={styles.listMenu}
          >
            <View
              style={styles.icon}
            />
          </View>

          <TouchableOpacity
            style={styles.listMenu}
            onPress={makeDefault}
            disabled={isDefault}
          >
            <Image
              style={styles.icon}
              source={isDefault ? undefined : icons.home}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listMenu}
            onPress={navigateToSavedLocations}
          >
            <Image
              style={styles.icon}
              source={icons.listMenu}
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};
