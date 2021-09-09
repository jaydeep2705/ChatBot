import React from 'react'
import {View, Text} from 'react-native'
import { CustomButton } from '../components';
import styles from './styles/ChatScreenStyles';

const ChatScreen = ({navigation})=> {
  return (
    <View style={styles.container}>
      <Text> Chat Screen</Text>
      <CustomButton buttonStyle={styles.button} textStyle={styles.buttonText} title={'Logout'} onPress={()=> navigation.goBack()} />
    </View>
  )
}

export default ChatScreen