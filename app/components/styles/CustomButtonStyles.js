import { StyleSheet } from 'react-native';
import {
  Colors,
  Fonts,
  verticalScale,
  horizontalScale,
  moderateScale
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: verticalScale(50),
    minWidth: horizontalScale(164)
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.coolGrey14,
    height: moderateScale(50),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    color: Colors.white,
    fontSize: Fonts.size.regular
  },
  buttonTitleWithIcon: {
    marginLeft: horizontalScale(10)
  }
});

export default styles;
