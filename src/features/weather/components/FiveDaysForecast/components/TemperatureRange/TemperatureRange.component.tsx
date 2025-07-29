import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

interface Props {
  temperature: {
    max: number;
    min: number;
  };
  range: {
    max: number;
    min: number;
  };
}

const { width } = Dimensions.get('window');

const RANGE_BG_WIDTH = width * 0.3;

function getColorByTemperature(t: number) {
  const clamped = Math.max(-30, Math.min(30, t));

  const hue = 30 + 240 * (30 - clamped) / 60;

  return `hsl(${hue}, 100%, 50%)`;
}

export const TemperatureRange: React.FC<Props> = ({
  temperature,
  range
}) => {
  const { foregroundWidth, translateX } = React.useMemo(() => {
    const totalRange = range.max - range.min;

    const currentRange = temperature.max - temperature.min;

    const startOffset = temperature.min - range.min;

    return {
      foregroundWidth: (currentRange / totalRange) * RANGE_BG_WIDTH,
      translateX: (startOffset / totalRange) * RANGE_BG_WIDTH
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.temperatureText, styles.temperatureTextColder]}>
        {temperature.min}°
      </Text>
      <View style={[styles.rangeBackground, { width: RANGE_BG_WIDTH }]}>
        <LinearGradient
          colors={[getColorByTemperature(temperature.min), getColorByTemperature(temperature.max)]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.rangeForeground,
            {
              width: foregroundWidth,
              transform: [{ translateX }]
            }
          ]}
        />
      </View>
      <Text style={styles.temperatureText}>
        {temperature.max}°
      </Text>
    </View>
  );
};
