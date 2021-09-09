import { StyleSheet } from 'react-native';
import {Colors, Fonts} from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:'center',
    backgroundColor: '#0e101c',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: Fonts.size.h5,
    fontWeight: '600',
    marginBottom:10
  },
  input: {
    height: 45, 
    width: '80%',
    marginTop: 20,
  },
  labelStyle: {
    color: Colors.white
  },
  inputStyle: {
    color: Colors.white
  },
  button: {
    marginTop: 20,
    width: '80%',
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  register: {
    marginTop: 10,
    color: Colors.white
  },
});

export default styles;
