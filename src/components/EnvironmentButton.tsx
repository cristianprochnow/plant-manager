import React from 'react'
import { Text } from 'react-native'
import {
  RectButton,
  RectButtonProps
} from 'react-native-gesture-handler'

import { styles } from '../styles/components/environmentButton'

interface EnvironmentButton extends RectButtonProps {
  label: string
  isSelected: boolean
}

export const EnvironmentButton = ({
  label,
  isSelected,
  ...rest
}: EnvironmentButton) => {
  return (
    <RectButton
      style={
        isSelected
          ? [styles.button, styles.buttonActive]
          : [styles.button, styles.buttonInactive]
      }
      {...rest}
    >
      <Text style={
        isSelected
        ? [styles.buttonText, styles.buttonTextActive]
        : [styles.buttonText, styles.buttonTextInactive]
      }>
        {label}
      </Text>
    </RectButton>
  )
}
