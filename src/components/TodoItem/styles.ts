import { StyleSheet } from 'react-native';
import { colors } from '../../screens/Home/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 64,
    padding: 12,
    paddingRight: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: colors['gray-500']
  },
  checkboxBase: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.blue,
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: colors.blue,
  },
  text: {
    flex: 1,
    color: colors['gray-100']
  },
  completedText: {
    color: colors['gray-300'],
    textDecorationLine: 'line-through'
  },
  deleteBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  deleteBtnPressed: {
    backgroundColor: colors['gray-400'],
    color: colors.danger,
  }
});