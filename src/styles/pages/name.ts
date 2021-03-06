import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },

  emoji: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 36
  },

  title: {
    paddingHorizontal: 40,
    fontSize: 24,
    fontFamily: fonts.jost[600],
    textAlign: 'center',
    color: colors.heading,
  }
})
