import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

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
    fontFamily: fonts.jost[500],
    color: colors.white
  },
})
