import * as React from 'react';
import { ActivityIndicator, Pressable, TextInput } from 'react-native';

import { styles } from './styles';

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  onPress?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  readOnly?: boolean;
  isSearching?: boolean;
}

export const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  onFocus,
  onPress,
  readOnly,
  onBlur,
  isSearching
}) => {
  return (
    <Pressable style={styles.inputContainer} onPress={onPress}>
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
        onPress={onPress}
        readOnly={readOnly}
        autoFocus
      />
      {isSearching && <ActivityIndicator size="small" style={styles.loader} />}
    </Pressable>
  );
};
