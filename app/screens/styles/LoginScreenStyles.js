import { StyleSheet } from 'react-native';
import {Colors, Fonts} from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:'center'
  },
  headerTitle: {
    color: Colors.greyishBrownSix,
    fontSize: Fonts.size.h5,
    fontWeight: '600'
  },
  input: {
    backgroundColor: Colors.goldenTwo, 
    height: 45, 
    width: '80%',
    marginTop: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: Colors.goldenTwo,
    marginTop: 10
  },
  buttonText: {
    color: Colors.black
  },
  register: {
    marginTop: 5
  }
});

export default styles;
