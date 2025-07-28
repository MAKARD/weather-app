import * as React from 'react';
import { Pressable, ScrollView, Text } from 'react-native';
import uuid from 'react-native-uuid';

import { styles } from './styles';

import { Location } from '@/domain/models/Location.model';

interface Props {
  locations: Array<Location>;
  onLocationPress: (location: Location) => void;
}

export const SearchResults: React.FC<Props> = ({
  locations,
  onLocationPress
}) => {
  return (
    <ScrollView style={styles.container}>
      {locations.map((location) => (
        <Pressable
          onPress={() => onLocationPress(location)}
          style={({ pressed }) => ([
            styles.itemContainer,
            pressed && styles.itemContainerPressed
          ])}
          key={uuid.v4()}
        >
          <Text style={styles.itemText}>
            {location.name} {location.country} {location.state}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};
