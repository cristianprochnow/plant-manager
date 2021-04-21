import React, { useState } from 'react'
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import Emoji from 'react-native-emoji'

import { ActionButton } from '../components/ActionButton'
import { BasicInput } from '../components/BasicInput'
import { styles } from '../styles/pages/name'

export const Name = () => {
  const [userName, setUserName] = useState('')
  const isUserNameEmpty = userName === ''
  const isAnIosDevice = Platform.OS === 'ios'

  function handleChangeInputVale(text: string) {
    setUserName(text)
  }

  return (
    <KeyboardAvoidingView
      behavior={
        isAnIosDevice
          ? 'padding'
          : 'height'
      }
      style={styles.container}
    >
      <View style={styles.wrapper}>
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
    </KeyboardAvoidingView>
  )
}
