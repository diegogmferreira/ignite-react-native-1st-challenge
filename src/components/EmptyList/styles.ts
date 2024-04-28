import { StyleSheet } from 'react-native';
import { colors } from '../../screens/Home/styles';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors['gray-300'],
    paddingVertical: 48,
    alignContent: 'center',
    justifyContent: 'center',	
    gap: 16,
   
  },
  // divider: {
  //   height: 1,
  //   flex: 1,
  //   backgroundColor: colors['gray-300'],
  // },
  imageBackground: {
    width: 56,
    height: 56,
    alignSelf:  'center'
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: colors['gray-300'],
  }
});