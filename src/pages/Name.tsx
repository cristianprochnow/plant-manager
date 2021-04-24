import React, { useState } from 'react'
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Emoji from 'react-native-emoji'

import { ActionButton } from '../components/ActionButton'
import { BasicInput } from '../components/BasicInput'
import { styles } from '../styles/pages/name'
import { setDataToStorage } from '../utils/saveDataIntoStorage'
import storageConstants from '../constants/asyncStorage'

export const Name = () => {
  const navigation = useNavigation()
  const [userName, setUserName] = useState('')
  const isUserNameEmpty = userName === ''
  const isAnIosDevice = Platform.OS === 'ios'

  function handleChangeInputVale(text: string) {
    setUserName(text)
  }

  async function handleSubmit() {
    await setDataToStorage(
      storageConstants.user,
      userName
    )
    navigateToSuccessPage()

    function navigateToSuccessPage() {
      navigation.navigate('NameSuccess')
    }
  }

  function handleDismissKeyboard() {
    Keyboard.dismiss()
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
      <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
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
            onPress={handleSubmit}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
