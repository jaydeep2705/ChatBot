import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, Alert, Keyboard, TouchableOpacity, Platform, View, Button } from 'react-native';
import styles from './styles/RegisterScreenStyles';
import { CustomTextInput } from '../components';

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
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!emailRegex.test(username?.trim())) {
      Alert.alert('ChatBot', 'Please enter valid email address')
    } else if (username?.trim() !== '' && firstname?.trim() !== '' && lastname?.trim() !== '' && mobile?.trim() !== '' && password?.trim() !== '') {
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
      <Text style={styles.headerTitle} onPress={() => navigation.navigate('RegisterScreen')}>REGISTRATION</Text>
      <View style={styles.subContainer}>
        <View style={styles.viewContainer}>
          <CustomTextInput
            style={{ width: '100%' }}
            keyboardType={'email-address'}
            label={'Email Address'}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <CustomTextInput
            label={'Firstname'}
            keyboardType={'email-address'}
            value={firstname}
            style={{ width: '100%', marginTop: 14 }}
            onChangeText={(text) => setFirstname(text)}
          />
          <CustomTextInput
            label={'Lastname'}
            value={lastname}
            style={{ width: '100%', marginTop: 14 }}
            onChangeText={(text) => setLastname(text)}
          />
          <CustomTextInput
            label={'Mobile number'}
            keyboardType={'number-pad'}
            value={mobile}
            maxLength={10}
            style={{ width: '100%', marginTop: 14 }}
            onChangeText={(text) => setMobile(text)}
          />
          <CustomTextInput
            secureTextEntry
            style={{ width: '100%', marginTop: 14 }}
            label={'Password'}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.button}>
          <Button
            color={'white'}
            title="Register"
            onPress={onRegisterPress}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.btnRegister}>
            <Text style={styles.register}>
              Login
            </Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
