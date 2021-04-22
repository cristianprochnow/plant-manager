import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Text,
  View
} from 'react-native'

import { styles } from '../styles/components/header'

interface HeaderProps {
  complementText: string
  emphasisText: string
  image: ImageSourcePropType
}

export const Header = ({
  complementText,
  emphasisText,
  image
}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTextBox}>
        <Text style={[
          styles.headerTextFirst,
          styles.headerText
        ]}>{complementText}</Text>
        <Text style={[
          styles.headerTextSecond,
          styles.headerText
        ]}>{emphasisText}</Text>
      </View>

      <Image
        source={image}
        resizeMode="cover"
        style={styles.headerAvatar}
      />
    </View>
  )
}
