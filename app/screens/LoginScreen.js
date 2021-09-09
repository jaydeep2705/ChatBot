import React, { useState } from 'react';
import { View, Text, Alert, Keyboard, TouchableOpacity, Button } from 'react-native';
import styles from './styles/LoginScreenStyles';
import { Hoshi } from 'react-native-textinput-effects';

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
      <Hoshi
        label={'Username'}
        keyboardType={'email-address'}
        value={username}
        onChangeText={(text) => setUsername(text)}
        borderColor={'#ec5990'}
        style={styles.input}
        labelStyle={styles.labelStyle}
        inputStyle={styles.inputStyle} 
      />
      <Hoshi
        label={'Password'}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        borderColor={'#ec5990'}
        style={styles.input}
        labelStyle={styles.labelStyle}
        inputStyle={styles.inputStyle} 
      />
      <View style={styles.button}>
        <Button
          color
          title="Login"
          onPress={onLoginPress}
        />
      </View>
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
