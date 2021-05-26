import React from 'react'
import { useNavigation } from '@react-navigation/core'

import { SuccessMessage } from '../components/SuccessMessage'

export const PlantSavingSuccess = () => {
  const { navigate } = useNavigation()

  function handleNavigateToHome() {
    navigate('PlantSelector')
  }

  return (
    <SuccessMessage
      title="Tudo certo"
      subtitle="Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor."
      emojiName="hugging_face"
      onConfirm={handleNavigateToHome}
      buttonLabel="Muito obrigado :D"
    />
  )
}
