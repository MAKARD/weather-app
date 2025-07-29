import * as React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { FeelsLike } from '../../components/FeelsLike';
import { WidgetContainer } from '../../components/WidgetContainer';
import { Humidity } from '../../components/Humidity';
import { Wind } from '../../components/Wind';

import { useWeatherInLocation } from './useWeatherInLocation.controller';
import { styles } from './styles';

import { images } from '@/ui/assets/images';

export const WeatherInLocation: React.FC = () => {
  const {
    city,
    conditions,
    wind,
    isLoading,
    close,
    backgroundImage
  } = useWeatherInLocation();

  if (isLoading) {
    return (
      <ImageBackground
        style={styles.container}
        source={images.weather.unknown}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton} onPress={close}>
            <Text style={styles.headerButtonText}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.summary}>
          <Text style={styles.cityText}>
            {city}
          </Text>
          <Text style={styles.temperatureText}>
            - -°
          </Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      style={styles.container}
      source={backgroundImage}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={close}>
          <Text style={styles.headerButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={[styles.headerButtonText, styles.headerButtonTextAccent]}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.summary}>
          <Text style={styles.cityText}>
            {city}
          </Text>
          <Text style={styles.temperatureText}>
            {conditions.temperature}°
          </Text>
          <Text style={styles.description}>
            {conditions.description}
          </Text>
          <View style={styles.temperatureRangeContainer}>
            <Text style={styles.temperatureRangeText}>
              H:{conditions.maxTemperature}°
            </Text>
            <Text style={styles.temperatureRangeText}>
              L:{conditions.minTemperature}°
            </Text>
          </View>
        </View>
        <View style={styles.widgetsContainer}>
          <WidgetContainer title="FEELS LIKE" size="small">
            <FeelsLike
              value={conditions.feelsLike}
              actualValue={conditions.temperature}
            />
          </WidgetContainer>
          <WidgetContainer title="HUMIDITY" size="small">
            <Humidity
              value={conditions.humidity}
              temperature={conditions.temperature}
            />
          </WidgetContainer>
        </View>
        <View style={styles.widgetsContainer}>
          <WidgetContainer title="WIND" size="big">
            <Wind
              speed={wind.speed}
              gusts={wind.gusts}
              direction={wind.direction}
            />
          </WidgetContainer>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
