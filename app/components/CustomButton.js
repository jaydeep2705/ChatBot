import React from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { Icons } from '../theme';
import styles from './styles/CustomButtonStyles';

type CustomButtonPropType = {
  title: String,
  containerStyle: StyleProp<ViewStyle>,
  buttonStyle: StyleProp<ViewStyle>,
  textStyle: StyleProp<ViewStyle>,
  onPress: Function,
  iconTintColor: String
};

const CustomButton = (props: CustomButtonPropType) => {
  const {
    title,
    containerStyle,
    buttonStyle,
    textStyle,
    onPress,
    iconTintColor
  } = props;
  const { container, buttonTitle, buttonTitleWithIcon } = styles;
  return (
    <TouchableOpacity
      style={[container, containerStyle]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <View style={[styles.button, buttonStyle]}>
        <Text
          style={[
            buttonTitle,
            textStyle
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
