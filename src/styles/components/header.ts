import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  headerTextBox: {
    flex: 1
  },

  headerText: {
    lineHeight: 36,
    fontSize: 32
  },

  headerTextFirst: {
    fontFamily: fonts.jost[300],
    color: colors.heading
  },

  headerTextSecond: {
    fontFamily: fonts.jost[600],
    color: colors.heading
  },

  headerAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32
  }
})
