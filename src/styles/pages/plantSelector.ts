import { StyleSheet } from 'react-native'
import colors from '../colors'

import fonts from '../fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32
  },

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

  headerTextGreetings: {
    fontFamily: fonts.jost[300],
    color: colors.heading
  },

  headerTextName: {
    fontFamily: fonts.jost[600],
    color: colors.heading
  },

  headerAvatar: {}
})
