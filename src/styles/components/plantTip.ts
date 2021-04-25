import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minHeight: 88,
    padding: 16,
    borderRadius: 20,
    backgroundColor: colors.blue_light
  },

  tipImage: {
    width: 56,
    height: 56,
  },

  tipDescription: {
    flex: 1,
    marginHorizontal: 20,
    fontFamily: fonts.jost[400],
    fontSize: 16,
    lineHeight: 24,
    color: colors.blue
  }
})
