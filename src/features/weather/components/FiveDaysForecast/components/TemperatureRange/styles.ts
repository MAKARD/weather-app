import { StyleSheet } from 'react-native';

import { colors } from '@/ui/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 8
  },
  temperatureText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
    width: 30
  },
  temperatureTextColder: {
    opacity: 0.7,
    fontWeight: '500'

  },
  rangeBackground: {
    height: 5,
    backgroundColor: colors.black20,
    borderRadius: 2.5
  },
  rangeForeground: {
    height: 5,
    borderRadius: 2.5
  }
});
