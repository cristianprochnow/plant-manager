import React from 'react'
import { StatusBar } from 'react-native'

import { Welcome } from './src/pages/Welcome'

const App = () => {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Welcome />
    </>
  )
}

export default App
