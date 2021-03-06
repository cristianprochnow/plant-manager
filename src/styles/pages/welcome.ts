import {
  StyleSheet,
  Dimensions
} from 'react-native'

import colors from '../colors'
import fonts from '../fonts'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 32,
    marginTop: 32
  },

  title: {
    fontSize: 32,
    fontFamily: fonts.jost[600],
    textAlign: 'center',
    color: colors.heading
  },

  subtitle: {
    fontSize: 18,
    fontFamily: fonts.jost[400],
    textAlign: 'center',
    color: colors.text
  },

  heroImage: {
    width: Dimensions.get('window').width * 0.7
  }
})
