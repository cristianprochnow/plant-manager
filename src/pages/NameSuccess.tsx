import React from 'react'
import { useNavigation } from '@react-navigation/core'

import { SuccessMessage } from '../components/SuccessMessage'

export const NameSuccess = () => {
  const navigation = useNavigation()

  function handleMoveToHome() {
    navigation.navigate('Home')
  }

  return (
    <SuccessMessage
      emojiName="grin"
      title="Prontinho"
      subtitle=" Agora vamos começar a cuidar das suas plantinhas com muito cuidado."
      buttonLabel="Começar"
      onConfirm={handleMoveToHome}
    />
  )
}
