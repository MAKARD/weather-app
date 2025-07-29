import * as React from 'react';
import { ActivityIndicator, Keyboard, Pressable, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

interface Props {
  onChange: (value: string) => void;
  onCancel: () => void;
  onFocus: () => void;
  onBlur: () => void;
  isSearching: boolean;
  value: string;
}

export const SearchInput: React.FC<Props> = ({
  onChange,
  onCancel,
  onFocus,
  onBlur,
  isSearching,
  value
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder="Search for a city"
          onChangeText={onChange}
          submitBehavior="blurAndSubmit"
          returnKeyLabel="Search"
          returnKeyType="search"
          style={styles.input}
          autoCorrect={false}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {isSearching && <ActivityIndicator size="small" style={styles.loader} />}
      </View>
      {!!value && (
        <Pressable
          style={styles.cancelButton}
          onPress={() => {
            onCancel();
            queueMicrotask(() => {
              Keyboard.dismiss();
            });
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
