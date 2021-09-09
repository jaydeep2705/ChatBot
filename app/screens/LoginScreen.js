import React, { useState } from 'react';
import { View, Text, Alert, Keyboard, TouchableOpacity } from 'react-native';
import styles from './styles/LoginScreenStyles';
import { CustomButton, CustomTextInput } from '../components';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPress = () => {
    Keyboard.dismiss()
    if (username?.trim() !== '' && password?.trim() !== '') {
      navigation.navigate('ChatScreen')
    } else {
      Alert.alert('ChatBot', 'Please enter valid username and password')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle} onPress={() => navigation.navigate('RegisterScreen')}>Login</Text>
      <CustomTextInput
        placeholder={'Username'}
        keyboardType={'email-address'}
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input} />
      <CustomTextInput
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input} />
      <CustomButton title={'Login'} buttonStyle={styles.button} textStyle={styles.buttonText} onPress={onLoginPress} />
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text
          style={styles.register}>
          Don't have account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
