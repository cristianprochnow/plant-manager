import React from 'react'
import {
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import heroImage from '../assets/watering.png'
import { SafeCustomView } from '../components/SafeCustomView'
import { styles } from '../styles/pages/welcome'

export const Welcome = () => {
  return (
    <SafeCustomView customStyles={styles.container}>
      <Text>
        Gerencie suas plantas de forma fácil
      </Text>

      <Image source={heroImage} />

      <Text>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity>
        <Text>
          >
        </Text>
      </TouchableOpacity>
    </SafeCustomView>
  )
}
