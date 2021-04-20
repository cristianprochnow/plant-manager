import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32
  },

  emoji: {
    marginBottom: 40,
    fontSize: 96
  },

  title: {
    margin: 16,
    fontSize: 24,
    fontFamily: fonts.jost[600],
    color: colors.heading
  },

  subtitle: {
    marginBottom: 48,
    textAlign: 'center',
    fontFamily: fonts.jost[400],
    fontSize: 18,
    color: colors.text
  }
})
