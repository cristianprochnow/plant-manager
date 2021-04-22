import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    maxWidth: '45%',
    margin: 8,
    paddingVertical: 32,
    borderRadius: 20,
    backgroundColor: colors.shape
  },

  buttonText: {
    fontFamily: fonts.jost[600],
    fontSize: 16,
    lineHeight: 24,
    color: colors.heading
  }
})
