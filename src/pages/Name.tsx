import React from 'react'
import {
  Text,
  View,
  TextInput
} from 'react-native'
import Emoji from 'react-native-emoji'

import { ActionButton } from '../components/ActionButton'
import { BasicInput } from '../components/BasicInput'
import { styles } from '../styles/pages/name'

export const Name = () => {
  return (
    <View style={styles.container}>
      <Emoji
        name="smiley"
        style={styles.emoji}
      />

      <Text style={styles.title}>
        Como podemos chamar você?
      </Text>

      <BasicInput legend="Digite um nome" />

      <ActionButton label="Confirmar" />
    </View>
  )
}
