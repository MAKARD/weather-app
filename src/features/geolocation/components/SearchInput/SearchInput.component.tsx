import * as React from 'react';
import { ActivityIndicator, Keyboard, Pressable, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

interface Props {
  onChange: (value: string) => void;
  onSearch: () => Promise<void>;
  isSearching: boolean;
  value: string;
}

export const SearchInput: React.FC<Props> = ({
  onChange,
  onSearch,
  isSearching,
  value
}) => {
  const canSubmit = !!value && !isSearching;

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder="Search for a city"
        onChangeText={onChange}
        onSubmitEditing={canSubmit ? onSearch : undefined}
        submitBehavior={canSubmit ? 'blurAndSubmit' : 'submit'}
        returnKeyLabel="Search"
        returnKeyType="search"
        style={styles.input}
        readOnly={isSearching}
      />
      {isSearching && <ActivityIndicator size="small" style={styles.loader} />}
      {canSubmit && (
        <Pressable
          style={styles.cancelButton}
          onPress={() => {
            onChange('');
            Keyboard.dismiss();
          }}
        >
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </Pressable>
      )}
    </View>
  );
};
