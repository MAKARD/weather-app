import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    width: width * 0.435,
    height: width * 0.435,
    position: 'relative',
    overflow: 'hidden'
  },
  bigContainer: {
    width: 'auto',
    height: 'auto',
    flex: 1
  },
  headerText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 10,
    opacity: 0.5
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
