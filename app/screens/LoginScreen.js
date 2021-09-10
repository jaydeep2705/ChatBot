import React, { useRef, useState } from 'react';
import { View, SafeAreaView, Text, Alert, Keyboard, TouchableOpacity, Button } from 'react-native';
import styles from './styles/LoginScreenStyles';
import { Hoshi } from 'react-native-textinput-effects';
import { CustomTextInput } from '../components'
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPress = () => {
    Keyboard.dismiss()
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!emailRegex.test(username?.trim())) {
      Alert.alert('ChatBot', 'Please enter valid email address')
    } else if (username?.trim() !== '' && password?.trim() !== '') {
      navigation.navigate('ChatScreen')
    } else {
      Alert.alert('ChatBot', 'Please enter valid email and password')
    }
  }
  const inputRef = useRef(null);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle} onPress={() => navigation.navigate('RegisterScreen')}>LOGIN</Text>
      <View style={styles.subContainer}>
        <View style={styles.viewContainer}>
          <CustomTextInput
            style={{width: '100%'}}
            label={'Email Address'}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <CustomTextInput
            secureTextEntry
            style={{width: '100%', marginTop: 14}}
            label={'Password'}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
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
