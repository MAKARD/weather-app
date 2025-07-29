import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';

import { styles } from './styles';
import { TextWithHighlight } from './components/TextWithHighlight';

import { Location } from '@/domain/models/Location.model';

interface Props {
  locations: Array<Location>;
  isNoResults: boolean;
  searchTerm: string;
  onLocationPress: (location: Location) => void;
}

export const SearchResults: React.FC<Props> = ({
  locations,
  isNoResults,
  searchTerm,
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
          <TextWithHighlight textToHighlight={searchTerm}>
            {`${location.name} ${location.country} ${location.state || ''}`}
          </TextWithHighlight>
        </TouchableOpacity>
      ))}
    </View>
  );
};
