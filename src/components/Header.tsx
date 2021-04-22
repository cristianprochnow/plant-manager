import React from 'react'
import {
  Image,
  Text,
  View
} from 'react-native'

import headerAvatar from '../assets/waterdrop.png'
import { styles } from '../styles/components/header'

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTextBox}>
        <Text style={[
          styles.headerTextFirst,
          styles.headerText
        ]}>Olá,</Text>
        <Text style={[
          styles.headerTextSecond,
          styles.headerText
        ]}>Tiago</Text>
      </View>

      <Image
        source={headerAvatar}
        resizeMode="cover"
        style={styles.headerAvatar}
      />
    </View>
  )
}
