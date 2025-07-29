import { StyleSheet } from 'react-native';

import { colors } from '@/ui/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderRadius: 16,

    overflow: 'hidden'
  },
  body: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  cityText: {
    color: colors.white,
    fontSize: 32,
    fontWeight: '600'
  },
  temperatureText: {
    color: colors.white,
    fontWeight: '600',

    fontSize: 32
  }
});
