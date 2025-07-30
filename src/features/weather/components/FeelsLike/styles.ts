import { Platform, StyleSheet } from 'react-native';

import { colors } from '@/ui/colors';

export const styles = StyleSheet.create({
  temperatureText: {
    fontSize: 40,
    fontWeight: '400',
    color: colors.white,
    flex: 1
  },
  description: {
    fontSize: Platform.select({ android: 13, default: 16 }),
    color: colors.white
  }
});
