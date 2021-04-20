import { StyleSheet } from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    marginVertical: 40,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    textAlign: 'center',
    fontFamily: fonts.jost[400],
    fontSize: 18,
    color: colors.text
  }
})
