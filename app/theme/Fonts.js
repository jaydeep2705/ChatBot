import { moderateScale } from './Metrics';
import Colors from './Colors';

const size = {
  h1: moderateScale(38),
  h2: moderateScale(34),
  h3: moderateScale(30),
  h4: moderateScale(28),
  h5: moderateScale(24),
  h6: moderateScale(19),
  input: moderateScale(18),
  regular: moderateScale(16),
  medium: moderateScale(14),
  small: moderateScale(12),
  extraSmall: moderateScale(11),
  tiny: moderateScale(9),
  label: moderateScale(1)
};

export default {
  size
};
