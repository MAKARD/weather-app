import { StyleSheet } from 'react-native';

import { colors } from '@/ui/colors';

export const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: 16,

    flexDirection: 'row',
    position: 'relative',
    height: 60,
    justifyContent: 'space-between',
    paddingTop: 6,
    borderTopWidth: 1,
    borderColor: colors.white50
  },
  header: {
    width: '100%',
    marginTop: 40,
    alignItems: 'flex-end'
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: colors.white,

    opacity: 0.8
  },
  listMenu: {
  }
});
