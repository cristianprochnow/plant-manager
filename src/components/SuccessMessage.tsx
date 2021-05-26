import React from 'react'
import {
  Text,
  View
} from 'react-native'
import Emoji from 'react-native-emoji' // https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json

import { styles } from '../styles/components/successMessage'
import { ActionButton } from './ActionButton'

interface SuccessMessageProps {
  emojiName: string
  title: string
  subtitle: string
  buttonLabel: string
  onConfirm: () => void
}

export const SuccessMessage = ({
  emojiName,
  title,
  subtitle,
  buttonLabel,
  onConfirm
}: SuccessMessageProps) => {
  return (
    <View style={styles.container}>
      <Emoji
        name={emojiName}
        style={styles.emoji}
      />

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

      <ActionButton
        label={buttonLabel}
        onPress={onConfirm}
      />
    </View>
  )
}
