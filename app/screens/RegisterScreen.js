import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, Alert, Keyboard, TouchableOpacity, Platform } from 'react-native';
import styles from './styles/LoginScreenStyles';
import { CustomButton, CustomTextInput } from '../components';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPress = () => {
    Keyboard.dismiss()
    navigation.goBack()
  }

  const onRegisterPress = () => {
    Keyboard.dismiss()
    if (username?.trim() !== '' && firstname?.trim() !== '' && lastname?.trim() !== '' && mobile?.trim() !== '' && password?.trim() !== '') {
      Alert.alert('ChatBot', 'Register Successful')
      navigation.navigate('LoginScreen')
    } else {
      Alert.alert('ChatBot', 'Please enter valid details')
    }
  }


  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
      >
      <Text style={styles.headerTitle} onPress={() => navigation.navigate('RegisterScreen')}>Register</Text>
      <CustomTextInput
        placeholder={'Username'}
        keyboardType={'email-address'}
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input} />
      <CustomTextInput
        placeholder={'Firstname'}
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
        style={styles.input} />
      <CustomTextInput
        placeholder={'Lastname'}
        value={lastname}
        onChangeText={(text) => setLastname(text)}
        style={styles.input} />
      <CustomTextInput
        placeholder={'Mobile number'}
        keyboardType={'number-pad'}
        value={mobile}
        maxLength={10}
        onChangeText={(text) => setMobile(text)}
        style={styles.input} />
      <CustomTextInput
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input} />
      <CustomButton title={'Register'} buttonStyle={styles.button} textStyle={styles.buttonText} onPress={onRegisterPress} />
      <TouchableOpacity onPress={onLoginPress}>
        <Text
          style={styles.register}>
          Login
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
