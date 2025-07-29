import * as React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface Props {
  value: number;
  actualValue: number;
}

const description = {
  feelsWarmer: 'Feels warmer than the actual temperature',
  feelsColder: 'Feels colder than the actual temperature',
  exact: 'Feels like the actual temperature'
};

const descriptionSelector = (value: number, actualValue: number) => {
  if (value === actualValue) {
    return description.exact;
  }

  if (value > actualValue) {
    return description.feelsWarmer;
  }

  return description.feelsColder;
};

export const FeelsLike: React.FC<Props> = ({
  value,
  actualValue
}) => {
  return (
    <>
      <Text style={styles.temperatureText}>
        {value}°
      </Text>
      <Text style={styles.description}>
        {descriptionSelector(value, actualValue)}
      </Text>
    </>
  );
};
