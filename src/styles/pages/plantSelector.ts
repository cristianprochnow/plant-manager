import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    padding: 32,
    marginTop: 32
  },

  filter: {
    marginTop: 40
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
  },

  environmentList: {
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 32
  },

  plantsContainer: {
    flex: 1,
    marginTop: 12
  },

  plantsList: {
    paddingVertical: 20,
    paddingHorizontal: 24,
  }
})
