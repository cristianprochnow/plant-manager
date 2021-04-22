import React from 'react'
import {
  View
} from 'react-native'

import { Header } from '../components/Header'
import { styles } from '../styles/pages/plantSelector'

export const PlantSelector = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}
