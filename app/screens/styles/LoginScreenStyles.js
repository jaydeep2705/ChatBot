import { StyleSheet } from 'react-native';
import {Colors, Fonts} from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d222e',
  },
  headerTitle: {
    marginTop: 80,
    marginLeft:40,
    color: '#f4d431',
    fontSize: Fonts.size.h2,
    fontWeight: '600',
    marginBottom:10
  },
  subContainer:{
    height: '100%',
    marginTop: 150,
    backgroundColor: '#ffffff',
  },
  viewContainer: {
    padding:20,
    marginTop: -140,
    marginLeft:40,
    marginRight: 40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    
  },
  input: {
    height: 45, 
    width: '100%',
    marginTop: 20,
  },
  labelStyle: {
    color: Colors.blackSeven
  },
  inputStyle: {
    color: Colors.black
  },
  button: {
    marginTop: -20,
    alignSelf:'center',
    width: '50%',
    color: 'white',
    height: 40,
    backgroundColor: '#1d222e',
    borderRadius: 20,
  },
  btnRegister: {
    width: '100%',
    marginBottom:40,
    marginTop: 20,
  },
  register: {
    color: '#ec5990',
    alignSelf:'flex-end',
  },
});

export default styles;
