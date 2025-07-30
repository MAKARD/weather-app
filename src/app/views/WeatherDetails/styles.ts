import { StyleSheet } from 'react-native';

import { colors } from '@/ui/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1
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
    color: colors.white,
    textAlign: 'center',
    marginBottom: 8
  },
  temperatureText: {
    fontSize: 96,
    fontWeight: '200',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 4,
    marginLeft: 30
  },
  description: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.white,
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
    color: colors.white
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
