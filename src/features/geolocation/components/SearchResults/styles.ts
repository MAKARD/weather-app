import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
  },
  centeringContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
    backgroundColor: '#FFFFFF'
  },
  itemText: {
    fontSize: 16,
    color: '#000000'
  },
  noResultsText: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 300
  }
});
