import React from 'react'
import {
  Image,
  Text,
  View,
  ViewProps
} from 'react-native'

import { styles } from '../styles/components/plantTip'
import waterdropImage from '../assets/waterdrop.png'

interface PlantTip extends ViewProps {
  text: string
}

export const PlantTip = ({
  text,
  ...rest
}: PlantTip) => {
  return (
    <View
      style={styles.tipContainer}
      {...rest}
    >
      <Image
        source={waterdropImage}
        style={styles.tipImage}
      />

      <Text style={styles.tipDescription}>
        {text}
      </Text>
    </View>
  )
}
