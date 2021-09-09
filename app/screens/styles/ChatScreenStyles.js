import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    backgroundColor: Colors.goldenTwo,
    marginTop: 10
  },
  buttonText: {
    color: Colors.black
  },
});

export default styles;
