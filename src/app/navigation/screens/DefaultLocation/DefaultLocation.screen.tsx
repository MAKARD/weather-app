import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { useDefaultLocation } from './useDefaultLocation.controller';
import { styles } from './styles';

import { icons } from '@/ui/assets/icons';
import { WeatherDetails } from '@/app/views/WeatherDetails';

export const DefaultLocation: React.FC = () => {
  const {
    navigateToSavedLocations,
    coordinates,
    city
  } = useDefaultLocation();

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
