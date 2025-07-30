import { StyleSheet } from 'react-native';

import { colors } from '@/ui/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    flex: 1,
    maxHeight: 36
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: colors.grayLight,
    borderRadius: 10,
    fontSize: 16,
    color: colors.black
  },
  loader: {
    position: 'absolute',
    right: 8,
    top: 8
  }
});
