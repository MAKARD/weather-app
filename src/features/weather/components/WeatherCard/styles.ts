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
    alignItems: 'center',
    flex: 1
  },
  cityText: {
    color: colors.white,
    fontSize: 32,
    fontWeight: '600',
    flex: 1
  },
  temperatureText: {
    color: colors.white,
    fontWeight: '600',

    fontSize: 32
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: colors.white,
    marginRight: 10
  }
});
