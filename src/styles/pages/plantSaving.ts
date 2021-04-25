import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  plantSavingContainer: {
    flex: 1,
    backgroundColor: colors.shape
  },

  plantContainer: {
    padding: 32,
    alignItems: 'center'
  },

  plantName: {
    marginVertical: 16,
    fontFamily: fonts.jost[600],
    fontSize: 24,
    lineHeight: 32,
    color: colors.heading
  },

  plantDescription: {
    fontFamily: fonts.jost[400],
    fontSize: 18,
    lineHeight: 26,
    color: colors.text
  },

  timerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 32,
    backgroundColor: colors.background
  },

  timerLabel: {
    fontFamily: fonts.jost[400],
    fontSize: 16,
    lineHeight: 24,
    color: colors.text
  }
})
