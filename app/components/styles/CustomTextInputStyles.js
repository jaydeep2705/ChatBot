import { StyleSheet } from 'react-native';
import { Colors, Fonts, horizontalScale } from '../../theme';

const styles = StyleSheet.create({
  input: {
    padding: 18,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    color:'black'
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: '#B00020',
  }
});

export default styles;
