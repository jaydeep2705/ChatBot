import { StyleSheet } from 'react-native';
import { Colors, Fonts, horizontalScale } from '../../theme';

const styles = StyleSheet.create({
  inputBg: {
    minHeight: 0,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    color: Colors.darkBlue,
    padding: horizontalScale(16),
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center'
  }
});

export default styles;
