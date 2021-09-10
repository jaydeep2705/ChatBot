import React, { useState } from 'react';
import { View,SafeAreaView, Text, Alert, Keyboard, TouchableOpacity, Button } from 'react-native';
import styles from './styles/LoginScreenStyles';
import { Hoshi } from 'react-native-textinput-effects';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPress = () => {
    Keyboard.dismiss()
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if(!emailRegex.test(username?.trim())){
      Alert.alert('ChatBot', 'Please enter valid email address')
    }else if(username?.trim() !== '' && password?.trim() !== '') {
      navigation.navigate('ChatScreen')
    } else {
      Alert.alert('ChatBot', 'Please enter valid email and password')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle} onPress={() => navigation.navigate('RegisterScreen')}>Login</Text>
      <View style={styles.subContainer}>
        <View style={styles.viewContainer}>
          <Hoshi
          label={'Email'}
          keyboardType={'email-address'}
          value={username}
          onChangeText={(text) => setUsername(text)}
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
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} style={styles.btnRegister}>
          <Text
            style={styles.register}>
            Don't have account? Register
          </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.button}>
            <Button
              color={'white'}
              title="SUBMIT"
              onPress={onLoginPress} />
          </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
