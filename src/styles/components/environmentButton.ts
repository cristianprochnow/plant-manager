import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 96,
    height: 48,
    marginRight: 4,
    borderRadius: 12,
  },

  buttonText: {
    fontSize: 16,
    lineHeight: 24,
  },

  buttonInactive: {
    backgroundColor: colors.shape,
  },

  buttonTextInactive: {
    fontFamily: fonts.jost[400],
    color: colors.heading
  },

  buttonActive: {
    backgroundColor: colors.green_light
  },

  buttonTextActive: {
    fontFamily: fonts.jost[600],
    color: colors.green_dark
  }
})
