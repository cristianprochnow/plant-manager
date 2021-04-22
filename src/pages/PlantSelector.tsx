import React from 'react'
import {
  Image,
  Text,
  View
} from 'react-native'

import headerAvatar from '../assets/waterdrop.png'

import { styles } from '../styles/pages/plantSelector'

export const PlantSelector = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextBox}>
          <Text style={[
            styles.headerTextGreetings,
            styles.headerText
          ]}>Olá,</Text>
          <Text style={[
            styles.headerTextName,
            styles.headerText
          ]}>Tiago</Text>
        </View>

        <Image
          source={headerAvatar}
          resizeMode="cover"
          style={styles.headerAvatar}
        />
      </View>
    </View>
  )
}
