import { StyleSheet } from 'react-native';

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
    color: '#FFFFFF',
    width: 30
  },
  temperatureTextColder: {
    opacity: 0.7,
    fontWeight: '500'

  },
  rangeBackground: {
    height: 5,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 2.5
  },
  rangeForeground: {
    height: 5,
    borderRadius: 2.5
  }
});
