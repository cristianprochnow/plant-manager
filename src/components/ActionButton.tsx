import React from 'react'
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps
} from 'react-native'

import { styles } from '../styles/components/actionButton'

interface ActionButton extends TouchableOpacityProps {
  label: string
}

export const ActionButton = ({
  label,
  onPress,
  disabled
}: ActionButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
      style={
        !!disabled
          ? [styles.button, {opacity: 0.5}]
          : styles.button
      }
    >
      <Text style={styles.buttonText}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
