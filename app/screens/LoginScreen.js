import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/LoginScreenStyles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text onPress={()=> navigation.navigate('RegisterScreen')}>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
