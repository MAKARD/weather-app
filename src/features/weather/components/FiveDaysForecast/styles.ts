import { StyleSheet } from 'react-native';

import { colors } from '@/ui/colors';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 3
  },
  weatherIcon: {
    height: 30,
    resizeMode: 'contain',
    flex: 1
  },
  weekdayText: {
    color: colors.white,
    fontWeight: 500,
    fontSize: 16,
    width: '20%'
  },
  forecastItemContainer: {
    borderTopWidth: 1,
    borderColor: colors.white20,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
