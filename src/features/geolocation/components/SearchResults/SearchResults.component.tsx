import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';

import { styles } from './styles';

import { Location } from '@/domain/models/Location.model';

interface Props {
  locations: Array<Location>;
  isNoResults: boolean;
  onLocationPress: (location: Location) => void;
}

export const SearchResults: React.FC<Props> = ({
  locations,
  isNoResults,
  onLocationPress
}) => {
  if (isNoResults) {
    return (
      <View style={[styles.container, styles.centeringContainer]}>
        <Text style={styles.noResultsText}>
          No Results
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {locations.map((location) => (
        <TouchableOpacity
          onPress={() => onLocationPress(location)}
          style={styles.itemContainer}
          key={uuid.v4()}
        >
          <Text style={styles.itemText}>
            {location.name} {location.country} {location.state}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
