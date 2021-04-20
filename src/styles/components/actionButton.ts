import { StyleSheet } from 'react-native'

import colors from '../colors'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 64,
    borderRadius: 16,
    backgroundColor: colors.green
  },

  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.white
  },
})
