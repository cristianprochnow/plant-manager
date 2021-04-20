import { StyleSheet } from 'react-native'

import colors from '../colors'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24
  },

  title: {
    marginTop: 38,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading
  },

  subtitle: {
    paddingHorizontal: 20,
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading
  },

  heroImage: {
    width: 292,
    height: 284
  }
})
