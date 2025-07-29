import { StyleSheet } from 'react-native';

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
    color: 'white',
    fontWeight: 500,
    fontSize: 16,
    width: '20%'
  },
  forecastItemContainer: {
    borderTopWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
