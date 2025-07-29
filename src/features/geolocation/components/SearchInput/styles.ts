import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'white'
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
    height: 36
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#E5E5EA',
    borderRadius: 10,
    fontSize: 16,
    color: '#000'
  },
  loader: {
    position: 'absolute',
    right: 8,
    top: 8
  },
  cancelButton: {
    marginLeft: 8
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#007AFF'
  }
});
