import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, Alert, Keyboard, TouchableOpacity, Platform, View, Button } from 'react-native';
import styles from './styles/LoginScreenStyles';
import { Hoshi } from 'react-native-textinput-effects';

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
      <Hoshi
        label={'Username'}
        keyboardType={'email-address'}
        value={username}
        onChangeText={(text) => setUsername(text)}
        borderColor={'#ec5990'}
        style={styles.input} 
        labelStyle={styles.labelStyle}
        inputStyle={styles.inputStyle} />
      <Hoshi
        label={'Firstname'}
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
        borderColor={'#ec5990'}
        style={styles.input} 
        labelStyle={styles.labelStyle}
        inputStyle={styles.inputStyle} />
      <Hoshi
        label={'Lastname'}
        value={lastname}
        onChangeText={(text) => setLastname(text)}
        borderColor={'#ec5990'}
        style={styles.input} 
        labelStyle={styles.labelStyle}
        inputStyle={styles.inputStyle} />
      <Hoshi
        label={'Mobile number'}
        keyboardType={'number-pad'}
        value={mobile}
        maxLength={10}
        onChangeText={(text) => setMobile(text)}
        borderColor={'#ec5990'}
        style={styles.input} 
        labelStyle={styles.labelStyle}
        inputStyle={styles.inputStyle} />
      <Hoshi
        label={'Password'}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        borderColor={'#ec5990'}
        style={styles.input} 
        labelStyle={styles.labelStyle}
        inputStyle={styles.inputStyle} />
      <View style={styles.button}>
        <Button
          color
          title="Register"
          onPress={onRegisterPress}
        />
      </View>
      <View style={styles.button}>
        <Button
          color
          title="Login"
          onPress={onLoginPress}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
