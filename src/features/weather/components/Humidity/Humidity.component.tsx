import * as React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface Props {
  value: number;
  temperature: number;
}

const calculateDewPoint = (humidity: number, temperature: number) => {
  const a = 17.27;
  const b = 237.7;

  const alpha = (a * temperature) / (b + temperature) + Math.log(humidity / 100);
  const dewPoint = (b * alpha) / (a - alpha);

  return Math.round(dewPoint);
};

export const Humidity: React.FC<Props> = ({
  value,
  temperature
}) => {
  return (
    <>
      <Text style={styles.temperatureText}>
        {value}%
      </Text>
      <Text style={styles.description}>
        The dew point is {calculateDewPoint(value, temperature)}° right now
      </Text>
    </>
  );
};
