import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#F6F6F6'
  },
  input: {
    flex: 1,
    height: 36,
    paddingHorizontal: 12,
    backgroundColor: '#E5E5EA',
    borderRadius: 10,
    fontSize: 16,
    color: '#000'
  },
  loader: {
    marginLeft: 8
  },
  cancelButton: {
    marginLeft: 8
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#007AFF'
  }
});
