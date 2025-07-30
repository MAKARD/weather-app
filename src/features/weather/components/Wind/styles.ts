import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '@/ui/colors';

const { width } = Dimensions.get('window');

const compassSize = width * 0.35;
const innerCircleSize = compassSize * 0.43;
const arrowSize = compassSize * 0.73;
const compassCenter = compassSize / 2;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  textInfoContainer: {
    flex: 1,
    paddingRight: 16,

    justifyContent: 'space-around'
  },
  textInfoItem: {
    paddingVertical: 5,

    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInfoTitle: {
    color: colors.white,
    fontSize: 16
  },
  textInfoValue: {
    color: colors.white70
  },
  separator: {
    width: '100%',
    height: 1,

    backgroundColor: colors.white20
  },
  compassInfoContainer: {
    position: 'relative',

    width: compassSize,
    height: compassSize
  },
  compassCenterSpeed: {
    color: colors.white,
    fontSize: 13
  },
  compassCenterSpeedUnit: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 13
  },
  compassCenter: {
    position: 'absolute',

    backgroundColor: colors.white10,
    borderRadius: '50%',

    width: innerCircleSize,
    height: innerCircleSize,

    top: compassCenter - innerCircleSize / 2,
    left: compassCenter - innerCircleSize / 2,

    justifyContent: 'center',
    alignItems: 'center'
  },
  compassIcon: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  arrowContainer: {
    position: 'relative',
    width: arrowSize,
    height: arrowSize,

    top: compassCenter - arrowSize / 2,
    left: compassCenter - arrowSize / 2
  },
  arrowIcon: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    transform: [{ rotateZ: '45deg' }]
  }
});
