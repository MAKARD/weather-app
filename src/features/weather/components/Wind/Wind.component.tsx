import * as React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

import { icons } from '@/ui/assets/icons';

interface Props {
  speed: number;
  gusts: number;
  direction: number;
}

const getDirectionString = (direction: number) => {
  const directions = [
    'N', 'NNE', 'NE', 'ENE',
    'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW',
    'W', 'WNW', 'NW', 'NNW'
  ];

  const normalized = ((direction % 360) + 360) % 360;
  const index = Math.round(normalized / 22.5) % 16;

  return `${Math.round(normalized)}° ${directions[index]}`;
};

export const Wind: React.FC<Props> = ({
  speed,
  gusts,
  direction
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInfoContainer}>
        <View style={styles.textInfoItem}>
          <Text style={styles.textInfoTitle}>
            Wind
          </Text>
          <Text style={styles.textInfoValue}>
            {speed} km/h
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.textInfoItem}>
          <Text style={styles.textInfoTitle}>
            Gusts
          </Text>
          <Text style={styles.textInfoValue}>
            {gusts} km/h
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.textInfoItem}>
          <Text style={styles.textInfoTitle}>
            Direction
          </Text>
          <Text style={styles.textInfoValue}>
            {getDirectionString(direction)}
          </Text>
        </View>
      </View>
      <View style={styles.compassInfoContainer}>
        <Image
          source={icons.compass}
          style={styles.compassIcon}
          tintColor="white"
        />
        <View style={[styles.arrowContainer, { transform: [{ rotateZ: `${direction}deg` }] }]}>
          <Image
            source={icons.windArrow}
            style={styles.arrowIcon}
            tintColor="white"
          />
        </View>
        <View style={styles.compassCenter}>
          <Text style={styles.compassCenterSpeed}>
            {speed}
          </Text>
          <Text style={styles.compassCenterSpeedUnit}>
            km/h
          </Text>
        </View>
      </View>
    </View>
  );
};
