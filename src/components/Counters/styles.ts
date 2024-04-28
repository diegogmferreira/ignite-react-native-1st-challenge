import { StyleSheet } from 'react-native';
import { colors } from '../../screens/Home/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20
  },
  number: {
    fontSize: 12,
    backgroundColor: colors['gray-400'],
    color: colors['gray-200'],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999
  },
});