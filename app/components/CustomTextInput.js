import React, {forwardRef} from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles/CustomTextInputStyles';

type CustomTextInputPropType = {
  style: StyleProp<ViewStyle>,
  inputTextStyle: StyleProp<ViewStyle>
};

function renderInput(ref, { value, inputTextStyle, ...otherProps }) {
  const { input } = styles;
  return (
    <TextInput
      ref={ref}
      style={[input, inputTextStyle]}
      value={`${value}`}
      {...otherProps}
    />
  );
}

const CustomTextInput = (
  { style, inputTextStyle, ...otherProps }: CustomTextInputPropType,
  ref
) => {
  const { inputBg } = styles;
  return (
    <View style={[inputBg, style]}>
      {renderInput(ref, { inputTextStyle, ...otherProps })}
    </View>
  );
};

export default forwardRef(CustomTextInput);
