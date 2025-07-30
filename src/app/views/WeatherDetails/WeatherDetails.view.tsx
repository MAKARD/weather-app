import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { styles } from './styles';
import { useWeatherDetails, UseWeatherDetailsParams } from './useWeatherDetails.controller';

import { WeatherImage } from '@/features/weather/components/WeatherImage';
import { Tile } from '@/features/weather/components/Tile';
import { FiveDaysForecast } from '@/features/weather/components/FiveDaysForecast';
import { FeelsLike } from '@/features/weather/components/FeelsLike';
import { Humidity } from '@/features/weather/components/Humidity';
import { Wind } from '@/features/weather/components/Wind';

interface Props extends UseWeatherDetailsParams {
  Header?: React.ReactNode;
  Footer?: React.ReactNode;
  city?: string;
}

export const WeatherDetails: React.FC<Props> = ({
  coordinates,
  Header = null,
  Footer = null,
  city
}) => {
  const {
    weatherType,
    conditions,
    isLoading,
    forecast,
    wind
  } = useWeatherDetails({ coordinates });

  if (isLoading) {
    return (
      <WeatherImage>
        <View style={styles.container}>
          <View style={styles.header}>
            {Header}
          </View>
          <View style={styles.summary}>
            <Text style={styles.cityText}>
              {city}
            </Text>
            <Text style={styles.temperatureText}>
              - -°
            </Text>
          </View>
        </View>
        {Footer}
      </WeatherImage>
    );
  }

  return (
    <WeatherImage weatherType={weatherType}>
      <View style={styles.container}>
        <View style={styles.header}>
          {Header}
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
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
            <Tile title="5-DAY FORECAST" size="big" style={styles.widgetsContainerNoBottomPadding}>
              <FiveDaysForecast list={forecast} />
            </Tile>
          </View>
          <View style={styles.widgetsContainer}>
            <Tile title="FEELS LIKE" size="small">
              <FeelsLike
                value={conditions.feelsLike}
                actualValue={conditions.temperature}
              />
            </Tile>
            <Tile title="HUMIDITY" size="small">
              <Humidity
                value={conditions.humidity}
                temperature={conditions.temperature}
              />
            </Tile>
          </View>
          <View style={styles.widgetsContainer}>
            <Tile title="WIND" size="big">
              <Wind
                speed={wind.speed}
                gusts={wind.gusts}
                direction={wind.direction}
              />
            </Tile>
          </View>
        </ScrollView>
      </View>
      {Footer}
    </WeatherImage>
  );
};
