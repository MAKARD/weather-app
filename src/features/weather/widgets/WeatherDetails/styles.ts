import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16
  },
  summary: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  cityText: {
    fontSize: 34,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8
  },
  temperatureText: {
    fontSize: 96,
    fontWeight: '200',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
    marginLeft: 30
  },
  description: {
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12
  },
  temperatureRangeContainer: {
    flexDirection: 'row',
    gap: 16
  },
  temperatureRangeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF'
  },
  widgetsContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between'
  },
  widgetsContainerNoBottomPadding: {
    paddingBottom: 0
  },
  scrollContainer: {
    paddingBottom: 20
  }
});
