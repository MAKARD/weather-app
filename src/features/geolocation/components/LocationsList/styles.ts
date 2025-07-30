import { StyleSheet } from 'react-native';

import { colors } from '@/ui/colors';

export const styles = StyleSheet.create({
  container: {
  },
  centeringContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
    backgroundColor: colors.white
  },
  noResultsText: {
    color: colors.black,
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 300
  }
});
