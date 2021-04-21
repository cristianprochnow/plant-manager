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
    padding: 32
  },

  title: {
    marginTop: 38,
    fontSize: 32,
    fontFamily: fonts.jost[600],
    textAlign: 'center',
    color: colors.heading
  },

  subtitle: {
    paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: fonts.jost[400],
    textAlign: 'center',
    color: colors.text
  },

  heroImage: {
    width: Dimensions.get('window').width * 0.7
  }
})
