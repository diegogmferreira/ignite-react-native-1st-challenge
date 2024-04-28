import { Platform, StyleSheet } from 'react-native';

export const colors = {
    'blue-dark': '#1E6F9F',
    'blue': '#4EA8D3',
    'purple-dark': '#5E60CE',
    'purple': '#8284FA',
    'gray-700': '#0D0D0D',
    'gray-600': '#1A1A1A',
    'gray-500': '#262626',
    'gray-400': '#333333',
    'gray-300': '#808080',
    'gray-200': '#D9D9D9',
    'gray-100': '#F2F2F2',
    'danger': '#E25858'
}

export const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    flex: 1,
    backgroundColor: colors['gray-600'],
    padding: 24,
    // fontFamily: Platform.select({
    //   android: 'Inter_100Thin',
    //   ios: 'Inter-Thin',
    // })
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 173,
    backgroundColor: colors['gray-700'],
  },
  imageLogo: {
    marginTop: 46,
    marginBottom: 40,
    alignSelf:  'center'
  },

  form: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 32
  },
  textInput: {
    flex: 1,
    height: 52,
    padding: 16,
    backgroundColor: colors['gray-500'],
    borderRadius: 6,
    color: colors['gray-100']
  },
  submitBtn: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors['blue-dark'],
    borderRadius: 6,
  },

  counters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});