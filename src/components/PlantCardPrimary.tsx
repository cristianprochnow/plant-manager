import React from 'react'
import { Text } from 'react-native'
import {
  RectButton,
  RectButtonProps
} from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import { styles } from '../styles/components/plantCardPrimary'

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    title: string
    photo: string
  }
}

export const PlantCardPrimary = ({
  data,
  ...rest
}: PlantCardPrimaryProps) => {
  return (
    <RectButton
      style={styles.button}
      {...rest}
    >
      <SvgFromUri
        uri={data.photo}
        width={70}
        height={70}
      />

      <Text style={styles.buttonText}>
        {data.title}
      </Text>
    </RectButton>
  )
}
