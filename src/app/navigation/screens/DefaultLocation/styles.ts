import { StyleSheet } from 'react-native';

import { colors } from '@/ui/colors';

export const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: 16,

    position: 'relative',
    height: 60,
    alignItems: 'flex-end',
    paddingTop: 5,

    borderTopWidth: 1,
    borderColor: colors.white50
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: colors.white,

    opacity: 0.8
  },
  listMenu: {

  }
});
