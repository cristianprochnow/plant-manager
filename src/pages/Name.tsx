import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native'
import Emoji from 'react-native-emoji'

import { ActionButton } from '../components/ActionButton'
import { BasicInput } from '../components/BasicInput'
import { styles } from '../styles/pages/name'

export const Name = () => {
  const [userName, setUserName] = useState('')
  const isUserNameEmpty = userName === ''

  function handleChangeInputVale(text: string) {
    setUserName(text)
  }

  return (
    <View style={styles.container}>
      <Emoji
        name={
          isUserNameEmpty
            ? 'smiley'
            : 'smile'
        }
        style={styles.emoji}
      />

      <Text style={styles.title}>
        Como podemos chamar você?
      </Text>

      <BasicInput
        legend="Digite um nome"
        onChangeText={handleChangeInputVale}
        value={userName}
      />

      <ActionButton
        label="Confirmar"
        disabled={
          isUserNameEmpty
            ? true
            : false
        }
      />
    </View>
  )
}
