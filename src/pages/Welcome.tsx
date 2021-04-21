import React from 'react'
import {
  Text,
  Image
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { SafeCustomView } from '../components/SafeCustomView'
import heroImage from '../assets/watering.png'
import { styles } from '../styles/pages/welcome'
import { ActionButton } from '../components/ActionButton'

export const Welcome = () => {
  const navigation = useNavigation()

  function handleNavigateToNamePage() {
    navigation.navigate('Name')
  }

  return (
    <SafeCustomView customStyles={styles.container}>
      <Text style={styles.title}>
        Gerencie suas plantas de forma fácil
      </Text>

      <Image
        style={styles.heroImage}
        source={heroImage}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <ActionButton
        label="Avançar"
        onPress={handleNavigateToNamePage}
      />
    </SafeCustomView>
  )
}
