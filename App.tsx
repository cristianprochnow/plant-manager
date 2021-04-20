import React from 'react'
import { StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

import { Name } from './src/pages/Name'
import { SafeCustomView } from './src/components/SafeCustomView'

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeCustomView>
        <Name />
      </SafeCustomView>
    </>
  )
}

export default App
