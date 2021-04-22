import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32
  },

  filter: {
    marginTop: 40
  },

  filterTextBox: {
    marginBottom: 20
  },

  filterText: {
    fontSize: 18,
    lineHeight: 24
  },

  filterTextEmphasis: {
    fontFamily: fonts.jost[500],
    color: colors.text
  },

  filterTextComplement: {
    fontFamily: fonts.jost[400],
    color: colors.text
  }
})
