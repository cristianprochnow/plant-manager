import React from 'react'
import {
  Text,
  View
} from 'react-native'
import Emoji from 'react-native-emoji'

import { ActionButton } from '../components/ActionButton'
import { styles } from '../styles/pages/success'

export const Success = () => {
  return (
    <View style={styles.container}>
      <Emoji
        name="grin"
        style={styles.emoji}
      />

      <Text style={styles.title}>
        Prontinho
      </Text>

      <Text style={styles.subtitle}>
        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
      </Text>

      <ActionButton label="Começar" />
    </View>
  )
}
