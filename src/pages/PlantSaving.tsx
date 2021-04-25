import React from 'react'
import {
  Image,
  Text,
  View
} from 'react-native'
import { SvgFromUri } from 'react-native-svg'

import { ActionButton } from '../components/ActionButton'
import waterdropImage from '../assets/waterdrop.png'
import { styles } from '../styles/pages/plantSaving'

export const PlantSaving = () => {
  const plantSvgUri = 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/2.svg'

  return (
    <View style={styles.plantSavingContainer}>
      <View style={styles.plantContainer}>
        <SvgFromUri
          uri={plantSvgUri}
          height={190}
        />

        <Text style={styles.plantName}>
          Nome da planta
        </Text>
        <Text style={styles.plantDescription}>
          Sobre a planta e suas características.
        </Text>
      </View>

      <View style={styles.timerContainer}>
        <View style={styles.tipContainer}>
          <Image
            source={waterdropImage}
            style={styles.tipImage}
          />

          <Text style={styles.tipDescription}>
          Mantenha a terra sempre úmida sem encharcar. Regue 2 vezes na semana.
          </Text>
        </View>

        <Text style={styles.timerLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        <ActionButton
          label="Cadastrar planta"
          onPress={() => {}}
        />
      </View>
    </View>
  )
}
