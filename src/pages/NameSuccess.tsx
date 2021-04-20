import React from 'react'

import { SuccessMessage } from '../components/SuccessMessage'

export const NameSuccess = () => {
  return (
    <SuccessMessage
      emojiName="grin"
      title="Prontinho"
      subtitle=" Agora vamos começar a cuidar das suas plantinhas com muito cuidado."
      buttonLabel="Começar"
      onConfirm={() => {}}
    />
  )
}
